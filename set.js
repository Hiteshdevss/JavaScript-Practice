const set = new Set();
set.add(10)
set.add(20)
set.add(50)
set.add(40)
console.log(set)
set.forEach((val)=>console.log(val))
for(let v of set.entries()){
  console.log(v[0])
}

set.clear()
console.log(set)
