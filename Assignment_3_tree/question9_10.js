class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

// Function to find the maximum
// sum of a level in tree
// using level order traversal
function maxLevelSum(root) {
  // Base case
  if (root == null) return 0;

  // Initialize result
  let result = root.data;

  // Do Level order traversal keeping
  // track of number of nodes at every
  // level.
  let q = [];
  q.push(root);
  while (q.length != 0) {
    // Get the size of queue when the
    // level order traversal for one
    // level finishes
    let count = q.length;

    // Iterate for all the nodes
    // in the queue currently
    let sum = 0;
    while (count-- > 0) {
      // Dequeue an node from queue
      let temp = q.shift();

      // Add this node's value
      // to current sum.
      sum = sum + temp.data;

      // Enqueue left and right children
      // of dequeued node
      if (temp.left != null) q.push(temp.left);
      if (temp.right != null) q.push(temp.right);
    }

    // Update the maximum node
    // count value
    result = Math.max(sum, result);
  }
  return result;
}

// Driver code
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(8);
root.right.right.left = new Node(6);
root.right.right.right = new Node(7);

/*   Constructed Binary tree is:
             1
           /   \
         2      3
       /  \      \
      4    5      8
                /   \
               6     7    */

console.log('Maximum level sum is ' + maxLevelSum(root));
console.log('_____________END_____________');

////
class node1 {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function printOddNodes(root1, isOdd) {
  // If empty tree
  if (root1 == null) return;

  // If current node is of odd level
  if (isOdd == true) console.log(root1.data + ' ');

  // Recur for children with isOdd
  // switched.
  printOddNodes(root1.left, !isOdd);
  printOddNodes(root1.right, !isOdd);
}

// Utility method to create a node
function newNode(data) {
  let node1 = new Node(data);
  return node1;
}

let root1 = newNode(1);
root1.left = newNode(2);
root1.right = newNode(3);
root1.left.left = newNode(4);
root1.left.right = newNode(5);
printOddNodes(root1, true);
