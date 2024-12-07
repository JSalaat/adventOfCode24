// read file input
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').split('\n');
// split the input into two list
let l1 = [];
let l2 = [];
let map = new Map();

for (let i = 0; i < input.length; i++) {
    let r = input[i].split('   ');
    l1.push(parseInt(r[0]));
    l2.push(parseInt(r[1]));
}

l2.forEach((v) => {
    map.has(v) ? map.set(v, map.get(v) + 1) : map.set(v, 1);
})

let res2 = 0;

l1.forEach((v) => {
    res2 += map.has(v) ? v * map.get(v) : 0;
})

console.log(res2);

//sort both list
l1.sort((a,b) => a-b)
l2.sort((a,b) => a-b)

//a for loop
let res = 0;
for (let i = 0; i < l1.length; i++) {
    res = res + Math.abs(l2[i] - l1[i])
}

console.log(res);