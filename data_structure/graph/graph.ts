interface Adjacency {
  node: string;
  weight: number;
}

class Graph {
  nodes: Array<string>;
  edges: Map<string, Adjacency[]>;

  constructor() {
    this.nodes = [];
    this.edges = <Map<string, Array<Adjacency>>>{};
  }

  addNode(node: string) {
    this.nodes.push(node);
    this.edges[node] = [];
  }
  addEdge(node1: string, node2: string, weight = 1) {
    this.edges[node1].push({ node: node2, weight: weight });
    this.edges[node2].push({ node: node1, weight: weight });
  }

  addDirectedEdge(startNode: string, destNode: string, weight = 1) {
    this.edges[startNode].push(<Adjacency>{ node: destNode, weight: weight });
  }

  display() {
    let graph = '';
    this.nodes.forEach((node) => {
      graph +=
        node + '->' + this.edges[node].map((n) => n.node).join(', ') + '\n';
    });
    console.log(graph);
  }

  // Breadth First Search
  // Level Order Search
  BFS(startNode: string) {
    let visited = new Map<string, boolean>();
    let queue = [];
    let path = [];

    visited[startNode] = true;
    queue.push(startNode);

    while (queue.length != 0) {
      let element = queue.shift();

      path.push(element);
      let neighbours = this.edges[element];

      for (let neighbour of neighbours) {
        if (!visited[neighbour.node]) {
          visited[neighbour.node] = true;
          queue.push(neighbour.node);
        }
      }
    }
    console.log(path);
  }

  // Depth First Search
  // Explore the nodes as far as possible until it reach the node that has no unvisited adjacency nodes.
  DFS(startNode: string) {
    let visited = new Map<string, boolean>();
    let path = [];
    this.findDFS(startNode, visited, path);
    console.log(path);
  }
  findDFS(node: string, visited: Map<string, boolean>, path: string[]) {
    visited[node] = true;
    path.push(node);

    const neighbours: Adjacency[] = this.edges[node];
    for (let neighbour of neighbours) {
      if (!visited[neighbour.node]) {
        this.findDFS(neighbour.node, visited, path);
      }
    }
  }

  BFSNew(node: string) {
    let visited = {}; // Add visited nodes to prevent visit more than once
    let nodeQueue: string[] = []; // Keeps nodes
    let path = [];

    visited[node] = true;
    nodeQueue.push(node);

    while (nodeQueue.length > 0) {
      let current = nodeQueue.shift();
      path.push(current);
      // Get the node’s neigbours
      const neigbours: Adjacency[] = this.edges[current];
      // Check all neigbours

      for (let neighbour of neigbours) {
        if (!visited[neighbour.node]) {
          visited[neighbour.node] = true;
          nodeQueue.push(neighbour.node);
        }
      }
    }
    console.log(path);
  }
}

// Try
const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('D', 'E');
graph.addEdge('C', 'F');
graph.addEdge('D', 'F');

graph.display();

console.log('DFS: A');
graph.DFS('A');

console.log('BFS: A');
graph.BFS('A');
console.log(' ----------------------- ');
console.log('DFS: C');
graph.DFS('C');

console.log('BFS: C');
graph.BFS('C');
graph.BFSNew('C');
