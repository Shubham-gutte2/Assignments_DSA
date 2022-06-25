//6. Find sum of all left leaves in a given Binary Tree
class Node {
  // A constructor to create a new Node
  constructor(key_) {
    this.key = key_;
    this.left = null;
    this.right = null;
  }
}
// Return the sum of left leaf nodes
function sumOfLeftLeaves(root) {
  if (root == null) return 0;
  // Using a stack_ for Depth-First
  // Traversal of the tree
  var stack_ = [];
  stack_.push(root);
  // sum holds the sum of all the left leaves
  var sum = 0;
  while (stack_.length > 0) {
    var currentNode = stack_[stack_.length - 1];
    stack_.pop();
    if (currentNode.left != null) {
      stack_.push(currentNode.left);
      // Check if currentNode's left
      // child is a leaf node
      if (currentNode.left.left == null && currentNode.left.right == null) {
        // if currentNode is a leaf,
        // add its data to the sum
        sum = sum + currentNode.left.key;
      }
    }
    if (currentNode.right != null) stack_.push(currentNode.right);
  }
  return sum;
}

// Driver Code
var root = new Node(20);
root.left = new Node(9);
root.right = new Node(49);
root.right.left = new Node(23);
root.right.right = new Node(52);
root.right.right.left = new Node(50);
root.left.left = new Node(5);
root.left.right = new Node(12);
root.left.right.right = new Node(12);
console.log('Sum of left leaves is ' + sumOfLeftLeaves(root) + '<br>');
console.log('______________END 1st___________');

//
//
//7.Find sum of all nodes of the given perfect binary tree
function sumNodes(l) {
  // no of leaf nodes
  let leafNodeCount = Math.pow(2, l - 1);

  // list of vector to store
  // nodes of all of the levels
  let vec = [];

  //initialize
  for (let i = 1; i <= l; i++) {
    vec.push([]);
  }

  for (let i = 1; i <= leafNodeCount; i++) {
    vec[l - 1].push(i);
  }

  for (let i = l - 2; i >= 0; i--) {
    let k = 0;

    while (k < vec[i + 1].length - 1) {
      // store the value of parent
      // node as sum of children nodes
      vec[i].push(vec[i + 1][k] + vec[i + 1][k + 1]);
      k += 2;
    }
  }

  let sum = 0;

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < vec[i].length; j++) {
      sum += vec[i][j];
    }
  }

  return sum;
}

let l = 3;

console.log(` sum of all nods ${sumNodes(l)}`);
console.log('______________END 7 th___________');

//
//8.Count subtress that sum up to a given value x in a binary tree
class Node2 {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

let v;

// function to get a new node
function getNode(data) {
  // allocate space
  let newNode = new Node2(data);
  return newNode;
}

// function to count subtrees that
// sum up to a given value x
function countSubtreesWithSumX(root2, x) {
  // if tree is empty
  if (root2 == null) return 0;

  // sum of nodes in the left subtree
  let ls = countSubtreesWithSumX(root2.left, x);

  // sum of nodes in the right subtree
  let rs = countSubtreesWithSumX(root2.right, x);

  // sum of nodes in the subtree
  // rooted with 'root.data'
  let sum = ls + rs + root2.data;

  // if true
  if (sum == x) v++;

  // return subtree's nodes sum
  return sum;
}

// utility function to
// count subtrees that
// sum up to a given value x
function countSubtreesWithSumXUtil(root2, x) {
  // if tree is empty
  if (root2 == null) return 0;

  v = 0;

  // sum of nodes in the left subtree
  let ls = countSubtreesWithSumX(root2.left, x);

  // sum of nodes in the right subtree
  let rs = countSubtreesWithSumX(root2.right, x);

  // if tree's nodes sum == x
  if (ls + rs + root2.data == x) v++;

  // required count of subtrees
  return v;
}

/* binary tree creation   
            5
        / \
    -10     3
    / \ / \
    9 8 -4 7
*/
let root2 = getNode(5);
root2.left = getNode(-10);
root2.right = getNode(3);
root2.left.left = getNode(9);
root2.left.right = getNode(8);
root2.right.left = getNode(-4);
root2.right.right = getNode(7);

let x = 7;

console.log('Count = ' + countSubtreesWithSumXUtil(root2, x));
console.log('______________END 7 th___________');

//
//
