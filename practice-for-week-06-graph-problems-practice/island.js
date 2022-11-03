function getNeighbors(row, col, graph) {
  const neighbors = []
  // Check top
  if (graph[row - 1] && graph[row - 1][col] !== 0) {
    neighbors.push([row - 1, col])
  }
  // Check bottom
  if (graph[row + 1] && graph[row + 1][col] !== 0) {
    neighbors.push([row + 1, col])
  }

  // Check left
  if (graph[col - 1] && graph[row][col - 1] !== 0) {
    neighbors.push([row, col - 1])
  }
  // Check right
  if (graph[col + 1] && graph[row][col + 1] !== 0) {
    neighbors.push([row, col + 1])
  }
  return neighbors
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
const visited = new Set([row, col].toString())
  // Create a stack, put the starting node in the stack
const stack = [[row, col]]
  // Put the stringified starting node in visited

  // Initialize size to -1
let size = - 1
  // While the stack is not empty,
while(stack.length > 0) {
  // Pop the first node
  let currentNode = stack.pop()
  // DO THE THING (increment size by 1)
  size++
  console.log(size, 'size')
  console.log(currentNode, 'node')
  // Then push all the UNVISITED neighbors on top of the stack
  let neighbors = getNeighbors(currentNode[0], currentNode[1], graph)
  for(let neighbor of neighbors) {
    if(!visited.has(neighbor.toString())) {
      // and mark them as visited
      visited.add(neighbor.toString())
      stack.push(neighbor)
      // console.log(neighbor)
    }
  }
}
// HINT: This is what your helper function `getNeighbors` is for
// HINT: Remember, you're storing your visited nodes as strings!
  // return size
return size 
  // Your code here
}

module.exports = [getNeighbors, islandSize];