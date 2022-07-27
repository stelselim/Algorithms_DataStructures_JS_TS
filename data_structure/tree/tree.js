class TreeNode {
  val;
  left;
  right;

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// How TO Add An Element TO TREE.
function insert(root, value) {
  if (root === null) {
    root = new TreeNode(value);
    return;
  }
  insertNode(root, value);
}
function insertNode(root, value) {
  if (value < root.val) {
    if (root.left) {
      insertNode(root.left, value);
    } else {
      root.left = new TreeNode(value);
    }
  } else {
    if (root.right) {
      insertNode(root.right, value);
    } else {
      root.right = new TreeNode(value);
    }
  }
}
function DFSRecursive(root) {
  if (!root) return [];
  const left = DFSRecursive(root.left);
  const right = DFSRecursive(root.right);
  return [root.val, ...left, ...right];
}
function DFSDifferent(root) {
  if (root) console.log(root.val);
  if (root.left) DFSDifferent(root.left);
  if (root.right) DFSDifferent(root.right);
}

function DFSTraverse(root) {
  let stack = [root];
  let result = [];

  while (stack.length > 0) {
    let current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  console.log(result);
}

function search(root, val) {
  if (root === null) return false;
  if (root.val === val) return true;
  return search(root.left, val) || search(root.right, val);
}

// Because of call stack => it gives O(n) Time Complexity.
function treeSum(root) {
  if (!root) {
    return 0;
  }
  return root.val + treeSum(root.left) + treeSum(root.right);
}

// Recursively
function treeMinValue(root) {
  if (root === null) return Infinity;
  const leftMin = treeMinValue(root.left);
  const rightMin = treeMinValue(root.right);
  return Math.min(root.val, leftMin, rightMin);
}
function findMaxSumPath(root) {
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.val;
  const leftMax = findMaxSumPath(root.left);
  const rightMax = findMaxSumPath(root.right);
  return root.val + Math.max(leftMax, rightMax);
}

function searchIterative(root, target) {
  // Breadth First Search
  let queue = [root];

  while (queue.length > 0) {
    let current = queue.shift();
    if (current.val === target) {
      return true;
    }
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
}

function BFSTraverse(root) {
  if (!root) return [];
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
    let current = queue.shift();
    result.push(current.val);

    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  console.log(result);
}

function main() {
  let root = new TreeNode(6);
  insert(root, 10);
  insert(root, 5);
  insert(root, 4);
  insert(root, 3);
  insert(root, 7);
  insert(root, 12);
  insert(root, 15);

  let res = DFSRecursive(root);
  console.log(res);
  DFSDifferent(root);
  BFSTraverse(root);
  DFSTraverse(root);
  console.log(search(root, 2));
  console.log(search(root, 4));
  console.log(searchIterative(root, 2));
  console.log(searchIterative(root, 4));
  console.log(treeSum(root));
  console.log(treeMinValue(root));
  console.log(findMaxSumPath(root));
}
main();
