// read file input
const fs = require('fs');
const input = fs.readFileSync('inputsos.txt', 'utf8').split('\n');
let count = 0;
input.forEach((v) => {
    let r = v.split(' ');
    let innerList = [];
    r.forEach((v) => {
        innerList.push(parseInt(v));
    })
    let firstEl = innerList[0];
    let lastEl = innerList[innerList.length - 1];
    let isInc = firstEl < lastEl;
    let isCountable = true;
    let bearable = true;
    for(let i = 0; i < innerList.length - 1; i++) {
        if (isInc) {
            if (!(innerList[i + 1] - innerList[i] === 1 ||
                innerList[i + 1] - innerList[i] === 2 ||
                innerList[i + 1] - innerList[i] === 3)
            ) {
                if (bearable) {
                    isCountable = checkstillbearable([...innerList.slice(0, i), ...innerList.slice(i + 1)], isInc)
                    || checkstillbearable([...innerList.slice(0, i+1), ...innerList.slice(i + 2)], isInc);
                }
                else{
                    isCountable = false;
                }
                break;
            }
        } else {
            if (!(innerList[i] - innerList[i + 1] === 1 ||
                innerList[i] - innerList[i + 1] === 2 ||
                innerList[i] - innerList[i + 1] === 3)
            ) {
                if (bearable) {
                    isCountable = checkstillbearable([...innerList.slice(0, i), ...innerList.slice(i + 1)], isInc)
                    || checkstillbearable([...innerList.slice(0, i+1), ...innerList.slice(i + 2)], isInc);
                }
                else{
                    isCountable = false;
                }
                break;
            }
        }
    }
    if (isCountable){
        count++;
    }
});

function checkstillbearable (innerList, isInc) {
    let isCountable = true;
    for(let i = 0; i < innerList.length - 1; i++) {
        if (isInc) {
            if (!(innerList[i + 1] - innerList[i] === 1 ||
                innerList[i + 1] - innerList[i] === 2 ||
                innerList[i + 1] - innerList[i] === 3)
            ) {
                isCountable = false;
                break;
            }
        } else {
            if (!(innerList[i] - innerList[i + 1] === 1 ||
                innerList[i] - innerList[i + 1] === 2 ||
                innerList[i] - innerList[i + 1] === 3)
            ) {
                isCountable = false;
                break;
            }
        }
    }
    return isCountable;
}
console.log(count);
// let map = new Map();