class TreeNode {
  val;
  right;
  left;

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function insert(root, value) {
  if (!root) {
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
  }
  if (value > root.val) {
    if (root.right) {
      insertNode(root.right, value);
    } else {
      root.right = new TreeNode(value);
    }
  }
}
function BFSTraverse(root) {
  let queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current.val);

    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
}
function DFSRecursive(root) {
  if (!root) return;
  if (root) console.log(root.val);
  DFSRecursive(root.left);
  DFSRecursive(root.right);
}
function DFSRecursive2(root) {
  if (!root) return [];
  let right = DFSRecursive2(root.right);
  let left = DFSRecursive2(root.left);

  return [root.val, ...right, ...left];
}
function treeSum(root) {
  if (!root) return 0;
  let left = treeSum(root.left);
  let right = treeSum(root.right);
  return root.val + left + right;
}
function minValue(root) {
  if (!root) return Infinity;
  let left = minValue(root.left);
  let right = minValue(root.right);

  return Math.min(left, right, root.val);
}
function findMaxSumPath(root) {
  if (!root) return -Infinity; // If it is null, return -Infinity, Because it should not be in the path.
  if (!root.left && !root.right) return root.val; // if no child, return value itself.
  let left = findMaxSumPath(root.left); // Find left max
  let right = findMaxSumPath(root.right); // Fİnd right max
  let max = Math.max(left, right);
  return root.val + max; // find the path including max + root.val
}

let root = new TreeNode(6);
insert(root, 2);
insert(root, 1);
insert(root, 4);
insert(root, 7);
insert(root, 5);
insert(root, 8);

// BFSTraverse(root);
let res = DFSRecursive2(root);
console.log(res);
console.log(treeSum(root));
console.log(minValue(root));
console.log(findMaxSumPath(root));
