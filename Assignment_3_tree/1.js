class Node {
  constructor(val) {
    this.left = null;
    this.value = val;
    this.right = null;
  }
}

let root = null;

const insert = (root, value) => {
  if (root == null) {
    let node = new Node(value);
    root = node;
    return root;
  }
  if (value <= root.value) {
    root.left = insert(root.left, value);
  } else if (value > root.value) {
    root.right = insert(root.right, value);
  }
  return root;
};

const search = (root, value) => {
  if (root == null) {
    return false;
  }
  if (root.value == value) {
    return true;
  } else if (value < root.value) {
    return search(root.left, value);
  }
  return search(root.right, value);
};

const findMaxVal = (root) => {
  if (root == null) {
    return null;
  }
  if (root.right == null) {
    return root.value;
  }
  return findMaxVal(root.right);
};

const remove = (root, value) => {
  if (root == null) {
    return null;
  }
  if (value < root.value) {
    root.left = remove(root.left, value);
  } else if (value > root.value) {
    root.right = remove(root.right, value);
  } else {
    if (root.left == null && root.right == null) {
      return null;
    }
    if (root.left && root.right) {
      let temp = findMaxVal(root.left);
      root.value = temp;
      root.left = remove(root.left, temp);
    } else {
      if (root.left !== null) {
        return root.left;
      }
      if (root.right !== null) {
        return root.right;
      }
    }
  }
  return root;
};

const preOrder = (root) => {
  if (root == null) {
    return;
  }
  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
};

const inOrder = (root) => {
  if (root == null) {
    return;
  }
  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
};

const postOrder = (root) => {
  if (root == null) {
    return;
  }
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
};

root = insert(root, 8);
root = insert(root, 3);
root = insert(root, 10);
root = insert(root, 1);
root = insert(root, 6);
root = insert(root, 14);
root = insert(root, 4);
root = insert(root, 7);
root = insert(root, 13);

preOrder(root);
console.log("------End of PreOrder------");
inOrder(root);
console.log("------End of InOrder------");
postOrder(root);
console.log("------End of PostOrder------");

console.log(search(root, 7));
console.log(search(root, 700));

root = remove(root, 6);
preOrder(root);
console.log("----------------");
root = remove(root, 8);
preOrder(root);
