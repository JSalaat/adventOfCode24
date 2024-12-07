// read file input
const fs = require('fs');
let inputorder = fs.readFileSync('input.txt', 'utf8').split('\n')
let inputtocheck = fs.readFileSync('input2.txt', 'utf8').split('\n')
let res = 0;

let map = new Map();
inputorder.forEach((line) => {
    let [key, value] = line.split('|');
    map.get(key) ? 
      map.get(key).push(parseInt(value)) : 
      map.set(key, [parseInt(value)]);
})
// console.log(map);

inputtocheck.forEach((line) => {
  let seq = [];
  line.split(',').forEach((v) => {
      seq.push(v);
  })
  // iterate over seq
  let isinorder = false;
  for (let i = 0; i < seq.length; i++) {
    if(checkifinorder(seq, i, map)){
      isinorder = true;
    }
  }
  if(isinorder){
    // get the middle number of seq
    let middle = seq[Math.floor(seq.length / 2)];
    res = res + parseInt(middle);
  } 
  // else {
  //   seq.sort((a,b) => b-a);
  //   let middle = seq[Math.floor(seq.length / 2)];
  //   ires = ires + parseInt(middle);
  //   console.log(seq);
  // }
  console.log(res);
})

function checkifinorder(seq, i, map) {
  // iterate over seq after i 
  let isswap = false;
  for (let j = i + 1; j < seq.length; j++) {
    if (!(map.get(seq[i]) && map.get(seq[i]).includes(parseInt(seq[j])))) {
      // console.log(seq[i], seq[j]);
      // swap these numbers
      let temp = seq[i];
      seq[i] = seq[j];
      seq[j] = temp;
      isswap = true;
    }
  }
  return isswap;

}