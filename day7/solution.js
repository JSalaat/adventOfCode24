const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8').split('\n')

let res = 0;
input.forEach((line) => {
    let expression = line.split(':');
    let [ans, values] = expression;
    console.log(+ans, values);
    let possibleAnss = [];
    values.trim().split(' ')
    .forEach((v, i) => {
        if(i===0){
            possibleAnss.push(+v);
            return;
        } else {
            let newAnss = [];
            possibleAnss.forEach((pans) => {
                if (!(pans + +v > +ans)) {
                    newAnss.push(pans + +v);
                }
                if (!(pans * +v > +ans)) {
                    newAnss.push(pans * +v);
                }
            })
            possibleAnss = newAnss;
        }
    })
    console.log(possibleAnss);
    res = possibleAnss.includes(+ans) ? res+ +ans : res;
})
console.log(res);
