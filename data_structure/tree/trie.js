// Used in search & Autocomplete
// Also known as prefix tree.

class TrieNode {
  value;
  isEndOfWord;
  children;

  constructor(value) {
    this.value = value;
    this.isEndOfWord = false;
    this.children = {};
  }
}

class Trie {
  root;
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode(char);
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }

  search(word) {
    let head = this.root;

    for (let char of word) {
      if (head.children[char] === undefined) {
        return false;
      }
      head = head.children[char];
    }
    return head.isEndOfWord;
  }

  startsWith(prefix) {
    let head = this.root;

    for (let char of prefix) {
      if (head.children[char] === undefined) {
        return false;
      }
      head = head.children[char];
    }
    return true;
  }
}

const trie = new Trie();

// insert few words
trie.insert("CAT");
trie.insert("DOG");

// search something
let res1 = trie.search("MAT"); // false
console.log(res1);
let res2 = trie.search("DOG"); // true
console.log(res2);
let res3 = trie.startsWith("DO"); // true
console.log(res3);
let res4 = trie.search("DO"); // false
console.log(res4);
