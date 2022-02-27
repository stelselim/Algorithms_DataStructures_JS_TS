class HashTable {
    table: Array<Array<Array<string | number>> | null>;
    size: number;
    constructor() {
        this.table = new Array<Array<Array<string | number>>>(15);
        this.size = 0;
    }

    _hash(key: String): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    remove(key: String) {
        const index = this._hash(key);
        if (this.table[index]) {
            this.table[index] = null;
            this.size--;
            return true;
        }
        return false;
    }

    set(key: String, value: any): boolean {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let val of (this.table[index] ?? [])) {
                // If already saved the value
                if (val[1] === value) {
                    return false;
                }
            }

            this.table[index]!.push([key, value]);
            return true;
        }

        this.table[index] = [[key, value]];
        return true;


    }
    get(key: String) {
        const index = this._hash(key);
        return this.table[index]?.find(e => e[0] === key)![1] ?? null;
    }
    print() {
        this.table.forEach(e => {
            if (e) {
                console.log(e.map(item => item[1]))
            }
        })
    }
}

// Try
const hashTable = new HashTable();
hashTable.set("John", "Teacher");
hashTable.set("Megan", "Student");
hashTable.set("Helga", "CEO");
hashTable.set("Tom", "Cook");
hashTable.print()
