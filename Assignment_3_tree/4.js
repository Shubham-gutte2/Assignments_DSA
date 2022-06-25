class Node {
  constructor() {
    this.value = 0;
    this.left = null;
    this.right = null;
  }
}
let root = null;
function searchLeaves(root) {
  if (root == null) return;

  if (root.left == null && root.right == null) {
    console.log(root.value + " ");
    return;
  }

  if (root.left != null) searchLeaves(root.left);

  if (root.right != null) searchLeaves(root.right);
}

function newNode(value) {
  var temp = new Node();
  temp.value = value;
  temp.left = null;
  temp.right = null;
  return temp;
}

root = newNode(8);
root.left = newNode(3);
root.left.left = newNode(1);
root.left.right = newNode(6);
root.left.right.left = newNode(4);
root.left.right.right = newNode(7);
root.right = newNode(10);
root.right.right = newNode(14);
root.right.right.left = newNode(13);

console.log("Leaves are");
searchLeaves(root);
