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

    DFSRecursive(start) {
			const result = [];
			const visited = {};
			const adjacencyList = this.adjacencyList;

			(function dfs(vertex) {
				if(!vertex) return null;
				result.push(vertex);
				visited[vertex] = true;

				adjacencyList[vertex].forEach(neighbor => {
					if(!visited[neighbor]) {
						return dfs(neighbor);
					}
				});
			})(start);

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

console.log("DFS Traversal of Graph: ");
console.log(g.DFSRecursive("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

