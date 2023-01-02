class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if(!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
    }
  
    removeVertex(vertex) {
      while(this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
  
      delete this.adjacencyList[vertex];
    }

    BFS(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(queue.length) {
            console.log(queue);
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}
  
let g = new Graph();
  
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g.adjacencyList);

console.log("BFS Traversal of Graph: ");
console.log(g.BFS("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

