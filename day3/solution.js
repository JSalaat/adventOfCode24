// read file input
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').split('\n').join('');
// const input = ["xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"];
let res = 0;

// part 1
// countOcc(input);
// console.log(res);

// part 2
let [init,...others] = input.split("don't()");
countOcc(init);
others.forEach((dont) => {
    let [,...dos] = dont.split("do()");
    dos = dos.join('');
    countOcc(dos);
});

function countOcc (str) {
    const regex = /\b\w*mul\((\d{1,3}),(\d{1,3})\)/g;
    let match;
    while ((match = regex.exec(str)) !== null) {
        const a = match[1]; // Captured group 1 (a)
        const b = match[2]; // Captured group 2 (b)
        // check if a an b are valid numbers
          if (!isNaN(a) && !isNaN(b)) {
              res = res + a * b;
          }
      }
}
console.log(res);