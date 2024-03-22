//program 1

const numRows = 5;

for(let i=1; i<=numRows; i++) {
    let pattern = '';
    for (let y=1; y<=i;y++){
        pattern += y;
    }
    console.log(pattern)
}


//program 2
const numRows = 10;

for(let i = 0; i <=numRows; i++){

  let row = '';
  for(let j = 0; j <=i; j++){
    row += '*';
  }
  console.log(row);
}

//program 3
for (i = 1; i <= 10; i++){
  for(j = 1; j <= i; j++){
    var result = i * j;
    console.log(`${i} x ${j} = ${result}`);
  }
}

