// read file input
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8').split('\n')
// const input = ["xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"];
let res = 0;

input.forEach((line) => {
    var count = (line.match(/XMAS/g) || []).length;
    res = res + count;
})

console.log(res);

input.forEach((line) => {
    var count = (line.match(/SAMX/g) || []).length;
    res = res + count;
})
console.log(res);

// iterate the input 2d array vertically
for (let i = 0; i < input[0].length; i++) {
    let str = '';
    for (let j = 0; j < input.length; j++) {
        str = str + input[j][i];
    }
    let count = (str.match(/XMAS/g) || []).length;
    res = res + count;
}
console.log(res);

for (let i = 0; i < input[0].length; i++) {
    let str = '';
    for (let j = 0; j < input.length; j++) {
        str = str + input[j][i];
    }
    let count = (str.match(/SAMX/g) || []).length;
    res = res + count;
}
console.log(res);

// iterate the input 2d array diagonally on the whole array
var rows = input.length;
var cols = input[0].length;
for (var n = 0; n < cols + rows - 1; n += 1)
{
  var r = n;
  var c = 0;
  var str = '';
  while (r >= 0 && c < cols)
  {
    if (r < rows)
      str += input[r][c];
    r -= 1;
    c += 1;
  }
//   console.log(str);
  let count = (str.match(/XMAS/g) || []).length;
  res = res + count;
}
console.log(res);

var rows = input.length;
var cols = input[0].length;
for (var n = 0; n < cols + rows - 1; n += 1)
{
  var r = n;
  var c = 0;
  var str = '';
  while (r >= 0 && c < cols)
  {
    if (r < rows)
      str += input[r][c];
    r -= 1;
    c += 1;
  }
//   console.log(str);
  let count = (str.match(/SAMX/g) || []).length;
  res = res + count;
}
console.log(res);

input = input.map((line) => {
    return line.split('').reverse().join('');  
})

var rows = input.length;
var cols = input[0].length;
for (var n = 0; n < cols + rows - 1; n += 1)
{
  var r = n;
  var c = 0;
  var str = '';
  while (r >= 0 && c < cols)
  {
    if (r < rows)
      str += input[r][c];
    r -= 1;
    c += 1;
  }
  console.log(str);
  let count = (str.match(/XMAS/g) || []).length;
  res = res + count;
}
console.log(res);
var rows = input.length;
var cols = input[0].length;
for (var n = 0; n < cols + rows - 1; n += 1)
{
  var r = n;
  var c = 0;
  var str = '';
  while (r >= 0 && c < cols)
  {
    if (r < rows)
      str += input[r][c];
    r -= 1;
    c += 1;
  }
  console.log(str);
  let count = (str.match(/SAMX/g) || []).length;
  res = res + count;
}
console.log(res);
