// 1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
function getPairsCount(arr, n, sum) {
  let count = 0;

  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) if (arr[i] + arr[j] == sum) count++;

  return count;
}

let arr = [1, 5, 7, -1, 5];
let n = arr.length;
let sum = 6;
console.log('Count of pairs is ' + getPairsCount(arr, n, sum));
//
//
//
//========================================
/// 2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
arr = [1, 2, 3, 4];
arr1 = [];
for (let i = arr.length - 1; i >= 0; i--) {
  arr1.push(arr[i]);
}
console.log(arr1);
//
//
//
//========================================
/// 3. Write a program to check if two strings are a rotation of each other?
function areRotations(str1, str2) {
  return str1.length == str2.length && (str1 + str1).indexOf(str2) != -1;
}

var str1 = 'AACD';
var str2 = 'ACDA';

if (areRotations(str1, str2)) {
  console.log('Strings are rotations of each other');
} else {
  console.log('Strings are not rotations of each other');
}
//
//
//
//========================================
///4. Write a program to print the first non-repeated character from a string?
const NO_OF_CHARS = 256;

function firstNonRepeating(str) {
  let arr = new Array(NO_OF_CHARS);
  for (let i = 0; i < NO_OF_CHARS; i++) {
    arr[i] = [0, 0];
  }

  for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i)][0]++;
    arr[str.charCodeAt(i)][1] = i;
  }

  let res = Number.MAX_VALUE;
  for (let i = 0; i < NO_OF_CHARS; i++)
    if (arr[i][0] == 1) res = Math.min(res, arr[i][1]);

  return res;
}

/* call function */

let str = 'shubham';
let index = firstNonRepeating(str);
if (index == Number.MAX_VALUE)
  console.log('Either all characters are repeating or string is empty');
else console.log('First non-repeating character is ', str[index]);
//
//
//
//========================================
///5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
function tHanoi(n, from_rod, to_rod, aux_rod) {
  if (n == 0) {
    return;
  }
  tHanoi(n - 1, from_rod, aux_rod, to_rod);
  console.log(
    'Move disk ' + n + ' from rod ' + from_rod + ' to rod ' + to_rod + '<br/>'
  );
  tHanoi(n - 1, aux_rod, to_rod, from_rod);
}

//call function
tHanoi(n, 'A', 'C', 'B');
//
//
//
//========================================
////6.Write a program to convert postfix to prefix expression.
function isOperator(x) {
  switch (x) {
    case '+':
    case '-':
    case '/':
    case '*':
      return true;
  }
  return false;
}

function post_to_pre(post_exp) {
  let s = [];

  let length = post_exp.length;

  for (let i = 0; i < length; i++) {
    // check if symbol is operator
    if (isOperator(post_exp[i])) {
      let op1 = s[s.length - 1];
      s.pop();
      let op2 = s[s.length - 1];
      s.pop();

      let temp = post_exp[i] + op2 + op1;

      s.push(temp);
    } else {
      s.push(post_exp[i] + '');
    }
  }

  let ans = '';
  while (s.length > 0) ans += s.pop();
  return ans;
}

let post_exp = 'ACB/+AD/F-*';

// Function call
console.log('Prefix : ' + post_to_pre(post_exp));
//
//
//
//========================================
///7.Write a program to convert prefix expression to infix expression
function isOperator(x) {
  switch (x) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '^':
    case '%':
      return true;
  }
  return false;
}

function pre_to_inf(str) {
  let stack = [];

  let l = str.length;

  for (let i = l - 1; i >= 0; i--) {
    let c = str[i];

    if (isOperator(c)) {
      let op1 = stack[stack.length - 1];
      stack.pop();
      let op2 = stack[stack.length - 1];
      stack.pop();

      let temp = '(' + op1 + c + op2 + ')';
      stack.push(temp);
    } else {
      stack.push(c + '');
    }
  }
  return stack[stack.length - 1];
}

let exp = '*-AB/CD-/E';

console.log('Infix : ' + pre_to_inf(exp));
//
//
//
//========================================
/// 8 Write a program to check if all the brackets are closed in a given code snippet.
function areBracketsBalanced(expr) {
  // Using ArrayDeque is faster
  // than using Stack class
  let stack = [];

  // Traversing the Expression
  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (x == '(' || x == '[' || x == '{') {
      // Push the element in the stack
      stack.push(x);
      continue;
    }

    if (stack.length == 0) return false;

    let check;
    switch (x) {
      case ')':
        check = stack.pop();
        if (check == '{' || check == '[') return false;
        break;

      case '}':
        check = stack.pop();
        if (check == '(' || check == '[') return false;
        break;

      case ']':
        check = stack.pop();
        if (check == '(' || check == '{') return false;
        break;
    }
  }

  // Check Empty Stack
  return stack.length == 0;
}

// Driver code
let expr = '([{}])';

// Function call
if (areBracketsBalanced(expr)) console.log('Balanced ');
else console.log('Not Balanced ');
//
//
//
//========================================
//// 9.Write a program to reverse a stack.

class Stack {
  constructor() {
    this.elements = [];
  }
  push(element) {
    this.elements.push(element);
  }
  pop() {
    if (this.elements.length === 0) return 'Underflow situation';
    else return this.elements.pop();
  }
  isEmpty() {
    if (this.elements.length > 0) return false;
    else return true;
  }
}
function reverse(str) {
  //Creates a new stack
  let stack = new Stack();

  let i = 0;
  let reversedStr = '';

  while (i !== str.length) {
    stack.push(str.charAt(i));
    i++;
  }

  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }
  //returns the reversed string.
  return reversedStr;
}
console.log(reverse('BrEAd'));
//
//
//
//10 Write a program to find the smallest number using a stack.
class Stack_2 {
  constructor() {
    this.items = [];
    this.size = 0;
    this.push = (Element) => {
      this.items[this.size++] = Element;
    };
    this.pop = () => {
      if (this.size === 0) {
        return -1;
      } else {
        this.size--;
        return this.items.pop();
      }
    };
    this.peak = () => {
      if (this.size === 0) {
        return -1;
      } else {
        return this.items[this.size - 1];
      }
    };
  }
}

function smallestNumberInStack(stack) {
  let smallest = stack.peak();
  while (stack.size !== 0) {
    let current = stack.pop();
    if (current < smallest) {
      smallest = current;
    }
  }
  return smallest;
}

arr = [10, 30, 20, 28, 9, 12];
let stackTen = new Stack_2();

while (arr.length) {
  stackTen.push(arr.shift());
}

console.log(
  `smallest number in stack ${stackTen.items} is ${smallestNumberInStack(
    stackTen
  )}`
);
