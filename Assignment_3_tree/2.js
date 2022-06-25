class Node {
  constructor(item) {
    this.data = item;
    this.left = null;
    this.right = null;
  }
}

let root;

function treeHeight(node) {
  if (node == null) {
    return 0;
  } else {
    let leftHeight = treeHeight(node.left);
    let rightHeight = treeHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

root = new Node(1);
root.left = new Node(12);
root.right = new Node(13);
root.right.left = new Node(14);
root.right.right = new Node(15);
root.right.left.left = new Node(21);
root.right.left.right = new Node(22);
root.right.right.left = new Node(23);
root.right.right.right = new Node(24);
console.log("Height/Depth of the tree is : " + treeHeight(root));
