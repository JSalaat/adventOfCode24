const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8').split('\r\n');
// console.log(input)

let dim2arr = []
input.forEach((c)=>{
    let arr = [];
    arr = c.split('');
    dim2arr.push(arr);
})

// console.log(dim2arr)
let map = new Map();
dim2arr.forEach((row, i)=>{
    row.forEach((col, j)=>{
        if(map.has(col)){
            let arr = map.get(col)
            arr.push(i+','+j)
            map.set(col, arr)
        }else{
            map.set(col, [i+','+j])
        }
    })
})
map.delete('#')
map.delete('.')
console.log(map)
let set = new Set();
map.forEach((value, key)=>{
    for (let i = 0; i < value.length; i++) {
        let [x, y] = value[i].split(',');
        x = parseInt(x);
        y = parseInt(y);
        for (let j=0; j < value.length; j++) {
            if (i == j) continue;
            let [x1, y1] = value[j].split(',');
            x1 = parseInt(x1);
            y1 = parseInt(y1);
            let disx = Math.abs(x - x1);
            let disy = Math.abs(y - y1);
            let nx1, ny1;
            let nx2, ny2;
            let initdisx = disx;
            let initdisy = disy;
            while (disx <= dim2arr.length || disy <= dim2arr[0].length) {
                if(initdisx != disx){
                    set.add(x1+','+y1);
                    set.add(x+','+y);
                }
                if (x < x1) {
                    nx1 = parseInt(x1) + disx;
                    nx2 = parseInt(x) - disx;
                    if (y < y1) {
                        ny1 = parseInt(y1) + disy;
                        ny2 = parseInt(y) - disy;
                    } else {
                        ny1 = parseInt(y1) - disy;
                        ny2 = parseInt(y) + disy;
                    }
                }
                else {
                    nx1 = parseInt(x1) - disx;
                    nx2 = parseInt(x) + disx;
                    if (y < y1) {
                        ny1 = parseInt(y1) + disy;
                        ny2 = parseInt(y) - disy;
                    } else {
                        ny1 = parseInt(y1) - disy;
                        ny2 = parseInt(y) + disy;
                    }
                }
                disx+=initdisx;
                disy+=initdisy;
                if (!(nx1 < 0 || ny1 < 0 || nx1 >= dim2arr.length || ny1 >= dim2arr[0].length)) {
                    set.add(nx1+','+ny1);
                };
                if (!(nx2 < 0 || ny2 < 0 || nx2 >= dim2arr.length || ny2 >= dim2arr[0].length)) {
                    set.add(nx2+','+ny2);
                };
            };
            // console.log(x, y, x1, y1)
        }
    }
})
console.log(set);
console.log(set.size);