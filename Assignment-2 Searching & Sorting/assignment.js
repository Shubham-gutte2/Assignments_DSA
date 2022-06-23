//
// 1.
const arr = [-3, -1, 4, 7, 9, 11, 14, 22, 26, 28, 36, 45, 67, 78, 88, 99];
const binarySearch = (arr = [], num) => {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (num == arr[mid]) {
      return mid;
    } else if (num < arr[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};
console.log(binarySearch(arr, 22));
console.log(binarySearch(arr, 56));
console.log(binarySearch(arr, 11));
console.log('_________END 1st___________');
//
//
//2.Implement Merge Sort
function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}
function mergeSort(array) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}
array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array));
console.log('__________END 2nd___________');
//
//
//3.implement Quick Sort

// A utility function to swap two elements
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, low, high) {
  // pivot
  let pivot = arr[high];

  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller
    // than the pivot
    if (arr[j] < pivot) {
      // Increment index of
      // smaller element
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    // pi is partitioning index, arr[p]
    // is now at right place
    let pi = partition(arr, low, high);

    // Separately sort elements before
    // partition and after partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

// Function to print an array
function printArray(arr, size) {
  for (let i = 0; i < size; i++) console.log(arr[i] + ' ');

  console.log('<br>');
}

// Driver Code

let arr1 = [10, 7, 8, 9, 1, 5];
let n = arr1.length;

quickSort(arr1, 0, n - 1);
console.log('Sorted array: <br>');
printArray(arr1, n);
console.log('___________End 3rd__________');
//
//4.
function insertionSort(inputArr) {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = current;
  }
  return inputArr;
}
let inputArr = [5, 2, 4, 6, 1, 3];
insertionSort(inputArr);
console.log(inputArr);
console.log('_______End 4th_________');

//
// 5.Write a program to sort list of strings
function string_sort(str) {
  var i = 0,
    j;
  while (i < str.length) {
    j = i + 1;
    while (j < str.length) {
      if (str[j] < str[i]) {
        var temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      }
      j++;
    }
    i++;
  }
}

var string = ['Suraj', 'Sanjeev', 'Rajnish', 'Yash', 'Ravi'];

// Print original string array
console.log('Original String</br>');
console.log(string);

console.log;
string_sort(string);

console.log('</br>After sorting</br>');

console.log('________END_________');
