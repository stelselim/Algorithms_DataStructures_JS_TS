let map = new Map();

map.set("Omer", 24);
map.set("Selim", 23);

for (let [key, value] of map) {
  console.log(key + ": " + value);
}

let set = new Set();

set.add("Selim");
set.add("Omer");
set.add("O");
set.delete("O")
for(let val of set){
    console.log(val);
}

if(set.has("Selim")){
    console.log("FOund it");
}