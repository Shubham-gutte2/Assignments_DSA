class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

var root = null;

function treeBFS() {
  var h = height(root);
  var i;
  for (i = 1; i <= h; i++) currentLevel(root, i);
}

function treeDFS(root) {
  if (root == null) {
    return;
  }
  console.log(root.value);
  treeDFS(root.left);
  treeDFS(root.right);
}

function height(root) {
  if (root == null) return 0;
  else {
    var leftHeight = height(root.left);
    var rightHeight = height(root.right);

    if (leftHeight > rightHeight) return leftHeight + 1;
    else return rightHeight + 1;
  }
}

function currentLevel(root, level) {
  if (root == null) return;
  if (level == 1) console.log(root.value + " ");
  else if (level > 1) {
    currentLevel(root.left, level - 1);
    currentLevel(root.right, level - 1);
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("BFS:");
treeBFS();
console.log("DFS:");
treeDFS(root);
