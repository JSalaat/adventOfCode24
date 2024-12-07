// read file input
const fs = require('fs');
let inputorder = fs.readFileSync('input.txt', 'utf8').split('\n')
// let inputtocheck = fs.readFileSync('input copy 2.txt', 'utf8').split('\n')
// const input = ["xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"];

console.log(inputorder);

let r = 0;
let c = 0;
let herDirection = '^';
let isOut = false;
let dir = 'up';
let pos = [];

//find the starting point
inputorder.forEach((line, row) => {
  line.split('').forEach((v, col) => {
    // if v === any of herDirection
    if(herDirection.includes(v)){
      console.log(row, col);
      r = row;
      c = col;
      pos.push(row+" "+col);
    }
  })
})

goForward(r, c);

function goForward(row, col){
  if (dir === 'up') {
    if(inputorder[row-1] && 
      inputorder[row-1][col] &&
      inputorder[row-1][col] !== '#') {
      console.log("going " + dir);
      row--;
      console.log(row, col);

      // dnt push the same position already visited
      if (pos.includes(row+" "+col)) {
        console.log('already visited');
      }
      else {
        pos.push(row+" "+col);
      }
      goForward(row, col);
      return;
    }
    else {
      if (row-1 < 0) {
        console.log('out of bound');
        isOut = true;
        return;
      }
      else {
        dir = 'right';
        console.log(dir);
        goForward(row, col);
        return;
      }
    }
  }

  if (dir === 'right') {
    if(inputorder[row][col+1] && 
    inputorder[row][col+1] !== '#') {
      console.log("going " + dir);
      col++;
      console.log(row, col);
      if (pos.includes(row+" "+col)) {
        console.log('already visited');
      }
      else {
        pos.push(row+" "+col);
      }
      goForward(row, col);
      return;
    }
    else {
      if (col+1 > inputorder[row].length) {
        console.log('out of bound');
        isOut = true;
        return;
      }
      else {
        dir = 'down';
        console.log(dir);
        goForward(row, col);
        return;
      }
    }
  }

  if (dir === 'down') {
    if(inputorder[row+1] && inputorder[row+1][col] && 
    inputorder[row+1][col] !== '#') {
      console.log("going " + dir);
      row++;
      console.log(row, col);
      if (pos.includes(row+" "+col)) {
        console.log('already visited');
      }
      else {
        pos.push(row+" "+col);
      }
      goForward(row, col);
      return;
    }
    else {
      if (row+1 > inputorder.length-1) {
        console.log('out of bound');
        isOut = true;
        return;
      }
      else {
        dir = 'left';
        console.log(dir);
        goForward(row, col);
        return;
      }
    }
  }

  if (dir === 'left') {
    if(inputorder[row][col-1] && 
    inputorder[row][col-1] !== '#') {
      console.log("going " + dir);
      col--;
      console.log(row, col);
      if (pos.includes(row+" "+col)) {
        console.log('already visited');
      }
      else {
        pos.push(row+" "+col);
      }
      goForward(row, col);
      return;
    }
    else {
      if (col-1 < 0) {
        console.log('out of bound');
        isOut = true;
        return;
      }
      else {
        dir = 'up';
        console.log(dir);
        goForward(row, col);
        return;
      }
    }
  }
}
  // console.log("end");
console.log(pos);
console.log(pos.length);
