const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8').split('\n')

let dim2arr = []
input.forEach((c)=>{
    let arr = [];
    arr = c.split('');
    dim2arr.push(arr);
})

console.log(arr)