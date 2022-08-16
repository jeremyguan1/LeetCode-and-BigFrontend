/**
 * @param {number[]} arr
 */
function bubbleSort(arr) {
  // your code here
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

const a = [4, 2, 100, 99, 10000, -1, 99, 2];
console.log(bubbleSort(a));
