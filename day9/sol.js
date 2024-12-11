const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8');

// console.log(input);

let res = [];
let isFile = true;
let idx = 0;
for (let letter of input) {
    if (isFile){
        for (let i = 0; i < letter; i++) {
            res.push(idx.toString());
        }
        idx++;
    }
    else {
        for (let i = 0; i < letter; i++) {
            res.push('.'.toString());
        }
    }
    isFile = !isFile;
}
// console.log(res);
let arr = res
console.log(arr);
let l = arr.indexOf('.');
// console.log(l);

// iterate backwards on the arr array
for (let i = arr.length - 1; i >= 0; i--) {
    let cur = arr[i];
    if(i+1 == l) break;
    if (cur === '.'){
        continue;
    }
    else {
        // replace cur val from the val at index l
        // let temp = arr[l];
        arr[l] = cur;
        arr[i] = '.';
        l = arr.indexOf('.');
    }
}
// console.log(arr);

let sum = 0;
arr.forEach((val, idx) => {
    if (val !== '.'){
        sum += val * idx;
    }
})
console.log(sum);