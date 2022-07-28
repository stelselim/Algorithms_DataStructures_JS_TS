class Hash {
  constructor(size) {
    this.size = size;
    this.array = new Array(size);
  }

  // Takes a value => index
  hash(value) {
    let total = 0;
    for (let i = 0; i < value.length; i++) {
      total += value.charCodeAt(i);
    }
    return total % this.size;
  }
  /**
   * [
   *  0: [ [key,value], [key, value]]
   *  1: [ [key,value]]
   *  ]
   *
   */
  ///
  add(value) {
    let index = this.hash(value);
    if (!this.array[index]) this.array[index] = [];
    this.array[index].push([index, value]);
  }
  remove(value) {
    let index = this.hash(value);
    if (!this.array[index]) return;
    let chain = this.array[index];
    let deleteIndex = -1;
    for (let val of chain) {
      if (val[1] === value) {
        deleteIndex = val[0];
      }
    }
    if (deleteIndex !== -1) {
      chain.splice(deleteIndex, 1);
    }
  }

  print(){
      console.log(this.array);
  }
}

let newHash = new Hash(5);
newHash.add("Selim")
newHash.add("Omer")
newHash.add("Yavuz")
newHash.add("Fatih")
newHash.add("Serap")
newHash.add("Cevat")
newHash.add("Bilal")
newHash.add("C")
newHash.add("CD")
newHash.add("CDE")
newHash.print()
newHash.remove("Selim")
newHash.remove("Omer")
newHash.print()

// O(1) Search Check, However it could be O(n) => for this approach. 