//2.Reverse a linked list in groups of given size
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  add(data) {
    let node = new Node(data);

    if (this.head == null) this.head = node;
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  printList() {
    let arr = [];
    let current = this.head;
    while (current != null) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }

  reverse(head = this.head) {
    let first = this.head;
    let second = first.next;

    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

let ll = new LinkedList();

ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
console.log(ll.reverse());
console.log(JSON.stringify(ll));
console.log('_____end 2nd que______');

////3. Merge a linked list into another linked list at alternate positions.
class Node2 {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}

/* Function to insert a node at the beginning */
function push(head_ref, new_data) {
  var new_node = new Node();
  new_node.data = new_data;
  new_node.next = head_ref;
  head_ref = new_node;
  return head_ref;
}

/* Utility function to print a singly linked list */
function printList(head) {
  var temp = head;
  while (temp != null) {
    console.log(temp.data + ' ');
    temp = temp.next;
  }
  console.log('<br>');
}

function merge(p, q) {
  var p_curr = p,
    q_curr = q;
  var p_next, q_next;

  while (p_curr != null && q_curr != null) {
    p_next = p_curr.next;
    q_next = q_curr.next;

    q_curr.next = p_next;
    p_curr.next = q_curr;

    p_curr = p_next;
    q_curr = q_next;
  }

  q = q_curr;
  return q;
}

// Driver code
var p = null,
  q = null;
p = push(p, 3);
p = push(p, 2);
p = push(p, 1);
console.log('First Linked List:<br>');
printList(p);
q = push(q, 8);
q = push(q, 7);
q = push(q, 6);
q = push(q, 5);
q = push(q, 4);
console.log('Second Linked List:<br>');
printList(q);
q = merge(p, q);
console.log('Modified First Linked List:<br>');
printList(p);
console.log('Modified Second Linked List:<br>');
printList(q);
console.log('_____end 3rd______');

///4.In an array, Count Pairs with given sum
function pairs_count(arr, n, sum) {
  // To store the count of pairs
  let ans = 0;

  // Sort the given array
  arr.sort();

  // Take two pointers
  let i = 0,
    j = n - 1;

  while (i < j) {
    if (arr[i] + arr[j] < sum) i++;
    else if (arr[i] + arr[j] > sum) j--;
    else {
      let x = arr[i],
        xx = i;
      while (i < j && arr[i] == x) i++;

      let y = arr[j],
        yy = j;
      while (j >= i && arr[j] == y) j--;

      if (x == y) {
        let temp = i - xx + yy - j - 1;
        ans += (temp * (temp + 1)) / 2;
      } else ans += (i - xx) * (yy - j);
    }
  }

  return ans;
}

let arr = [1, 5, 7, 5, -1];
let n = arr.length;
let sum = 6;

console.log(pairs_count(arr, n, sum));
console.log('_____end 4th______');

///5. Find duplicates in an array
const yourArray = [1, 1, 2, 3, 4, 5, 5];

const yourArrayWithoutDuplicates = [...new Set(yourArray)];

let duplicates = [...yourArray];
yourArrayWithoutDuplicates.forEach((item) => {
  const i = duplicates.indexOf(item);
  duplicates = duplicates
    .slice(0, i)
    .concat(duplicates.slice(i + 1, duplicates.length));
});

console.log(duplicates);
console.log('_____end 5th______');
///
//
//6.Find the Kth largest and Kth smallest number in an array
function kthSmallest(arr, n, k) {
  // Sort the given array
  arr.sort((a, b) => a - b);

  // Return k'th element in the sorted array
  return arr[k - 1];
}

let arry = [12, 3, 5, 7, 19];
let nth = arr.length,
  k = 2;
console.log("K'th smallest element is " + kthSmallest(arry, nth, k));
console.log('_____end 6th______');
///
//
//7.
function reArrange(arr, n) {
  let low = 0,
    high = n - 1;
  while (low < high) {
    if (arr[low] < 0) low += 1;
    else if (arr[high] > 0) high -= 1;
    else {
      let temp = arr[low];
      arr[low] = arr[high];
      arr[high] = temp;
    }
  }
}

function displayArray(arr, n) {
  for (let i = 0; i < n; i++) {
    console.log(arr[i], ' ');
  }
  console.log('</br>');
}

// driver code
// Data
let arr2 = [1, 2, -4, -5, 2, -7, 3, 2, -6, -8, -9, 3, 2, 1];
let n_arr = arr2.length;
reArrange(arr2, n_arr);
displayArray(arr2, n_arr);
console.log('_____end 7th_____');

//
//
//8.Reverse a string using a stack data structure
function reverse(str) {
  // get size of string
  let n = str.length;
  let i;
  let arr = str.split('');
  for (i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }
  return arr.join('');
}

// Driver program to test above functions
let str = 'abcdefs';
str = reverse(str);
console.log('Reversed string is ' + str);
console.log('_____end 8th______');

//
//
//9.Evaluate a postfix expression using stack
function evaluatePostfix(exp) {
  // create a stack
  let stack = [];

  // Scan all characters one by one
  for (let i = 0; i < exp.length; i++) {
    let c = exp[i];

    if (c == ' ') {
      continue;
    }

    // If the scanned character is an
    // operand (number here),extract
    // the number. Push it to the stack.
    else if (c >= '0' && c <= '9') {
      let n = 0;

      // extract the characters and
      // store it in num
      while (c >= '0' && c <= '9') {
        n = n * 10 + (c - '0');
        i++;
        c = exp[i];
      }
      i--;

      // push the number in stack
      stack.push(n);
    }

    // If the scanned character is
    // an operator, pop two elements
    // from stack apply the operator
    else {
      let val1 = stack.pop();
      let val2 = stack.pop();

      switch (c) {
        case '+':
          stack.push(val2 + val1);
          break;

        case '-':
          stack.push(val2 - val1);
          break;

        case '/':
          stack.push(parseInt(val2 / val1, 10));
          break;

        case '*':
          stack.push(val2 * val1);
          break;
      }
    }
  }
  return stack.pop();
}

let exp = '100 200 + 2 / 5 * 7 +';
console.log(evaluatePostfix(exp));
console.log('_____end 9th______');
//
//
//10.Implement a queue using the stack data structure
class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enQueue(x) {
    // Move all elements from s1 to s2
    while (this.s1.length != 0) {
      this.s2.push(this.s1.pop());
      //s1.pop();
    }

    // Push item into s1
    this.s1.push(x);

    // Push everything back to s1
    while (this.s2.length != 0) {
      this.s1.push(this.s2.pop());
      //s2.pop();
    }
  }

  // Dequeue an item from the queue
  deQueue() {
    // If first stack is empty
    if (this.s1.length == 0) {
      document.write('Q is Empty');
    }

    // Return top of s1
    let x = this.s1[this.s1.length - 1];
    this.s1.pop();
    return x;
  }
}

// Driver code
let q1 = new Queue();
q1.enQueue(1);
q1.enQueue(2);
q1.enQueue(3);

console.log(q1.deQueue() + '<br>');
console.log(q1.deQueue() + '<br>');
console.log(q1.deQueue() + '<br>');
console.log('_____end 10th______');
