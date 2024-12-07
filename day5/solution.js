// read file input
const fs = require('fs');
let inputorder = fs.readFileSync('input copy.txt', 'utf8').split('\n')
let inputtocheck = fs.readFileSync('input copy 2.txt', 'utf8').split('\n')
// const input = ["xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"];
let res = 0;

let map = new Map();
inputorder.forEach((line) => {
    let [key, value] = line.split('|');
    map.get(key) ? 
      map.get(key).push(parseInt(value)) : 
      map.set(key, [parseInt(value)]);
})
console.log(map);

inputtocheck.forEach((line) => {
  let seq = [];
  line.split(',').forEach((v) => {
      seq.push(v);
  })
  // iterate over seq
  let isinorder = true;
  for (let i = 0; i < seq.length; i++) {
    if(!checkifinorder(seq, i, map)){
      isinorder = false;
      break;
    }
  }
  if(isinorder){
    // get the middle number of seq
    let middle = seq[Math.floor(seq.length / 2)];
    res = res + parseInt(middle);
  }
  console.log(res);
})

function checkifinorder(seq, i, map) {
  // iterate over seq after i 
  for (let j = i + 1; j < seq.length; j++) {
    if (!(map.get(seq[i]) && map.get(seq[i]).includes(parseInt(seq[j])))) {
      console.log(seq[i], seq[j]);
      return false;
    }
  }
  return true;

}