const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8').split('\n');

let dim2arr = [];
let score = new Map();
let startPoints = [];
input.forEach((c, row)=>{
    let arr = [];
    arr = c.split('');
    // find all 0 in the array and push into startPoints
    arr.forEach((c, col)=>{
        if (c === '0') {
            startPoints.push([row, col]);
        }
    })
    dim2arr.push(arr);
})
console.log(startPoints)
// console.log(dim2arr)

let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
startPoints.forEach((startPoint, indx)=>{
    determineMove(startPoint, indx);
})

function determineMove(startPoint, indx, number=0) {
    if ( number === 9 ) {
        console.log('found all numbers');

        if(score.get(indx)){
            let myarray = score.get(indx);
            myarray.push(startPoint.join(''));
            score.set(indx, myarray);
        }
        else {
            let myarray = [];
            myarray.push(startPoint.join(''));
            score.set(indx, myarray);
        }
        // console.log(score);
        return;
    }
    // peek all directions from startpoints and find the increamenting number
    let [row, col] = startPoint;
    // peek right in dim2arr
    let nextRow = row;
    let nextCol = col;
    let nextNumber = number+1;
    for (let i=0; i<4; i++) {
        let [r, c] = directions[i];
        nextRow = row + r;
        nextCol = col + c;
        if (dim2arr[nextRow] && dim2arr[nextRow][nextCol] && dim2arr[nextRow][nextCol] == nextNumber) {
            console.log('found', nextNumber, 'at', nextRow, nextCol);
            determineMove([nextRow, nextCol], indx, number+1);
        }
    }
}
let res = 0;
score.forEach((value, key)=>{
    // console.log(value);
    res += value.length;
})
console.log(score);
console.log(res);