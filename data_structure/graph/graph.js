let edges = [
  ["a", "b"],
  ["b", "c"],
  ["b", "d"],
  ["a", "e"],
  ["e", "d"],
  ["d", "f"],
  ["f", "g"],
  ["z", "s"],
];

function buildGraph() {
  let graph = {};
  for (let edge of edges) {
    const node1 = edge[0];
    const node2 = edge[1];
    if (!graph[node1]) graph[node1] = [];
    if (!graph[node2]) graph[node2] = [];
    graph[node1].push(node2);
    graph[node2].push(node1);
  }
  return graph;
}

// Cycle Possible
function graphDFS(graph, start) {
  let stack = [start];
  let visitedNodes = {};

  while (stack.length > 0) {
    let current = stack.pop();

    if (visitedNodes[current]) continue;
    visitedNodes[current] = true;

    console.log(current);

    for (let neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
}

function graphBFS(graph, start) {
  let queue = [start]; // Assume that this is a Queue
  let visitedNodes = {};
  while (queue.length > 0) {
    let current = queue.shift(); // in JavaScript takes O(n), but assume queue O(1);

    if (visitedNodes[current]) continue;
    visitedNodes[current] = current;

    console.log(current);
    for (let neighbour of graph[current]) queue.push(neighbour);
  }
}

// BFS & DFS Both are okay, but BFS better close paths. BFS equally search;
function hasPath(graph, start, dest) {
  let queue = [start]; // Assume that this is a Queue
  let visitedNodes = {};
  let result = false;

  while (queue.length > 0) {
    let current = queue.shift(); // in JavaScript takes O(n), but assume queue O(1);
    if (visitedNodes[current]) continue;
    visitedNodes[current] = current;

    if (current === dest) result = true;
    console.log(current);
    for (let neighbour of graph[current]) queue.push(neighbour);
  }
  console.log(result);
}

let graph = buildGraph(edges);
// console.log(graph);

graphDFS(graph, "a");
console.log("--------------");
graphBFS(graph, "a");

hasPath(graph, "a", "f");

////////////
let graph2 = {
  1: [2],
  2: [1],
  3: [25],
  25: [3],
  4: [5],
  5: [4, 6, 7],
  6: [5],
  7: [5],
  55: [],
};

//////////// countConnectedComponents ////////////
function countConnectedComponents(graph) {
  let count = 0;
  let visited = {};
  // Iterate over nodes
  for (let node in graph) {
    if (explore(node, graph, visited)) {
      count++;
    }
  }
  return count;
}

function explore(node, graph, visited) {
  // If we already visited, the node it can not be indepenedent
  if (visited[node]) return false;

  visited[node] = true;

  // DFS => checks every connected component
  for (let neigbour of graph[node]) {
    explore(neigbour, graph, visited);
  }

  return true;
}

let count = countConnectedComponents(graph2);
console.log("Count: " + count);

//////////// findMaxComponent ///////////
function findMaxComponent(graph) {
  let max = -Infinity;
  let visited = {};

  // O (e)
  for (let node in graph) {
    max = Math.max(exploreSum(node, graph, visited), max);
  }
  console.log("Max: " + max);
}

function exploreSum(node, graph, visited) {
  if (visited[node]) return -Infinity; // If already calculated then return - Infinity,
  let queue = [node];
  let total = 0;

  while (queue.length > 0) {
    let current = queue.shift();
    if (visited[current]) continue;

    visited[current] = true;
    total += Number(current);

    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
  return total;
}
findMaxComponent(graph2);

// BFS
function shortestPath(graph, start, dest) {
  let visited = {};
  let queue = [[start, 0]];

  while (queue.length > 0) {
    let [current, distance] = queue.shift();

    if (current === dest) return distance;
    if (visited[current]) continue;

    visited[current] = true;

    for (let neigbour of graph[current]) {
      queue.push([neigbour, distance + 1]);
    }
  }
  return -1;
}

let sh1 = shortestPath(graph2, 1, 4);
console.log("shortest: " + sh1);
let sh2 = shortestPath(graph2, 4, 6);
console.log("shortest: " + sh2);
let sh3 = shortestPath(graph2, 5, 6);
console.log("shortest: " + sh3);
let sh4 = shortestPath(graph2, 1, 2);
console.log("shortest: " + sh4);

/// Count Compoment

function countMaxCompNew(graph) {
  // Could be build graph function
  let visited = {};
  let max = -Infinity;

  for (let node in graph) {
    max = Math.max(exploreMaxNew(node, graph, visited), max);
  }

  console.log("Max: " + max);
}

function exploreMaxNew(node, graph, visited) {
  if (visited[node]) return -Infinity; // We already visited

  let total = 0;
  let queue = [node];
  while (queue.length > 0) {
    let current = queue.shift();
    if (visited[current] !== undefined) continue;
    visited[current] = true;
    total += Number(current);

    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
  return total; // Visited every node in the component
}

countMaxCompNew(graph2);


function shortestPathNew(graph, start, dest) {
  let queue = [[start, 0]];
  let visited = {};

  while (queue.length > 0) {
    let [current, distance] = queue.shift();

    if (current === dest) return distance;
    if (visited[current]) continue;
    visited[current] = true;

    for (let neigbour of graph[current]) {
      queue.push([neigbour, distance + 1]);
    }
  }
  return -1;
}

let sh12 = shortestPath(graph2, 1, 4);
console.log("shortestNew: " + sh12);
let sh22 = shortestPath(graph2, 4, 6);
console.log("shortestNew: " + sh22);
let sh32 = shortestPath(graph2, 5, 6);
console.log("shortestNew: " + sh32);
let sh42 = shortestPath(graph2, 1, 2);
console.log("shortestNew: " + sh42);
