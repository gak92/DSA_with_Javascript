class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		this.values.push({val, priority});
		this.sort();
	}
	dequeue() {
		return this.values.shift();
	}
	sort() {
		this.values.sort((a,b) => a.priority - b.priority);
	}
}

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex){
		if(!this.adjacencyList[vertex])
			this.adjacencyList[vertex] = []; 
	}
	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({node: vertex2, weight});
		this.adjacencyList[vertex2].push({node: vertex1, weight});
	}
	Dijkstra(start, finish) {
		const pq = new PriorityQueue();
		const distances = {};
		const previous = {};
		let smallest;
		let path = [];

		// create initial state
		for(let vertex in this.adjacencyList) {
			if(vertex === start) {
				distances[vertex] = 0;
				pq.enqueue(vertex, 0);
			}
			else {
				distances[vertex] = Infinity;
				pq.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}
		console.log(pq);
		console.log(distances);
		console.log(previous);

		// As long as something to visit (something in pq)
		while(pq.values.length) {
			smallest = pq.dequeue().val;
			if(smallest === finish) {
				// We are done and build a path to return
				while(previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}

			if(smallest || distances[smallest] !== Infinity) {
				for(let neighbor in this.adjacencyList[smallest]) {
					// find neighbor node
					let nextNode = this.adjacencyList[smallest][neighbor];
					// console.log("next node: ", nextNode, neighbor);

					// calculate new distance to neighbor node
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.node;

					if(candidate < distances[nextNeighbor]) {
						// update new smallest distance to neighbor
						distances[nextNeighbor] = candidate;
						// update previous (How we get there)
						previous[nextNeighbor] = smallest;
						// enqueue in priority queue
						pq.enqueue(nextNeighbor, candidate);
					}
				}
			}
		} // End of while loop

		return path.concat(smallest).reverse();

	}	// End of method Dijktra
} // End of class Weighted Graph

let graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

console.log(graph.adjacencyList);

let res = graph.Dijkstra("A", "E");
// ["A", "C", "D", "F", "E"]
console.log("Sortest path: ", res);