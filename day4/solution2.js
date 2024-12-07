// read file input
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8').split('\n')
// const input = ["xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"];
let res = 0;

input.forEach((line, row) => {
    while (input[row].lastIndexOf('A') !== -1) {
      var indx = input[row].lastIndexOf('A');
      if (indx !== -1) {
        if (input[row - 1] && input[row - 1][indx + 1] && input[row - 1][indx + 1] === 'M') {
          if (input[row + 1] && input[row + 1][indx + 1] && input[row + 1][indx + 1] === 'M') {
            if (input[row - 1] && input[row - 1][indx - 1] && input[row - 1][indx - 1] === 'S') {
              if (input[row + 1] && input[row + 1][indx - 1] && input[row + 1][indx - 1] === 'S') {
                res = res + 1;
              }
            }
          }
        }

        if (input[row - 1] && input[row - 1][indx + 1] && input[row - 1][indx + 1] === 'S') {
          if (input[row + 1] && input[row + 1][indx + 1] && input[row + 1][indx + 1] === 'S') {
            if (input[row - 1] && input[row - 1][indx - 1] && input[row - 1][indx - 1] === 'M') {
              if (input[row + 1] && input[row + 1][indx - 1] && input[row + 1][indx - 1] === 'M') {
                res = res + 1;
              }
            }
          }
        }

        if (input[row - 1] && input[row - 1][indx + 1] && input[row - 1][indx + 1] === 'S') {
          if (input[row + 1] && input[row + 1][indx + 1] && input[row + 1][indx + 1] === 'M') {
            if (input[row - 1] && input[row - 1][indx - 1] && input[row - 1][indx - 1] === 'S') {
              if (input[row + 1] && input[row + 1][indx - 1] && input[row + 1][indx - 1] === 'M') {
                res = res + 1;
              }
            }
          }
        }

        if (input[row - 1] && input[row - 1][indx + 1] && input[row - 1][indx + 1] === 'M') {
          if (input[row + 1] && input[row + 1][indx + 1] && input[row + 1][indx + 1] === 'S') {
            if (input[row - 1] && input[row - 1][indx - 1] && input[row - 1][indx - 1] === 'M') {
              if (input[row + 1] && input[row + 1][indx - 1] && input[row + 1][indx - 1] === 'S') {
                res = res + 1;
              }
            }
          }
        }
      }
      input[row] = input[row].substring(0, indx) + 'Z' + input[row].substring(indx + 1);
    }
})
console.log(res);

