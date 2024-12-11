const fs = require('fs');
const { dot } = require('node:test/reporters');
let input = fs.readFileSync('input.txt', 'utf8');

// console.log(input);

let res = [];
let isFile = true;
let idx = 0;
let map = new Map();
let emptySpaces = [];
for (let letter of input) {
    if (isFile){
        for (let i = 0; i < letter; i++) {
            res.push(idx.toString());
        }
        map.set(idx, letter);
        idx++;
    }
    else {
        for (let i = 0; i < letter; i++) {
            res.push('.'.toString());
        }
        emptySpaces.push(letter);
    }
    isFile = !isFile;
}
// console.log(res);
let arr = res
// console.log(arr);
// let l = arr.indexOf('.');
// console.log(l);

// let dotSeq = 0;
// let dotSeqStartIndex = -1;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '.'){
//         dotSeq++;
//         if (dotSeqStartIndex === -1) dotSeqStartIndex = i;
//     }
//     else {
//         if (dotSeq > 0){
//             for (let j = arr.length - 1; j >= 0; j--) {
//                 let val = arr[j];
//                 if (val !== '.'){
//                     if(map.get(+arr[j])<=dotSeq){
//                         let x =map.get(+arr[j]);
//                         let number = +arr[j]
//                         let pointer = j;
//                         while (x>0){
//                             arr[dotSeqStartIndex] = arr[pointer];
//                             arr[pointer] = '.';
//                             dotSeqStartIndex++;
//                             x--;
//                             pointer--;
//                         }
//                         dotSeq -= +map.get(number);
//                         i-=dotSeq+1;
//                         dotSeq = 0;
//                         dotSeqStartIndex = -1;
//                         break;
//                     }
//                 }
//             }
//         }
//     }
    
// }
console.log(arr);

// for (let i = idx - 1; i >= 0; i--) {
//     let times = map.get(i);
//     emptySpaces.forEach((val, idx) => {
//         if (val >= times){
            
//         }
//     })
// }

let str = arr.join('_');
console.log(str);

for (let i = arr.length - 1; i >= 0; i-=2) {
    if (arr[i] === '.') continue
    let cur = arr[i];
    let times = map.get(+cur);
    let strToReplaceWith = (cur+'_').repeat(times);
    let strToFind = ('._').repeat(times);
    if (str.indexOf(strToFind) === -1) continue;
    map.set(+cur, [0, times]);
    str = str.replace('._'.repeat(times), strToReplaceWith);
    let indx = str.lastIndexOf(('_'+cur).repeat(times));
    // console.log(strToReplaceWith);
    // console.log(indx);
    // let len = '._'.repeat(times).length;
    // str = str.substring(0, indx) + '_.'.repeat(times) + str.substring(indx + len);
}
// while map has some keys
// while (map.size > 0){
    map.forEach((val, key) => {
        if (val[0] === 0){
            let strToFind = ('_'+key).repeat(val[1]);
            let strToReplaceWith = ('_.').repeat(val[1]);
            n = str.lastIndexOf(strToFind);
            // replace the last occurence of strToFind with strToReplaceWith
            str = str.substring(0, n) + strToReplaceWith + str.substring(n + strToFind.length);
        }
        else {
            map.delete(key);
        }
    })
// }
// console.log(str);
arr = str.split('_');
let sum = 0;
arr.forEach((val, idx) => {
    if (val !== '.'){
        sum += val * idx;
    }
})
console.log(sum);