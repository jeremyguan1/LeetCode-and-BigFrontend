/**
 * @param {number[]} arr
 */
function quickSort(arr) {
  // your code here
  quickSortHelper(arr, 0, arr.length - 1);
}

function quickSortHelper(arr, left, right) {
  if (left > right) return;
  const ind = partiton(arr, left, right);
  quickSortHelper(arr, left, ind - 1);
  quickSortHelper(arr, ind + 1, right);
}

function partiton(arr, left, right) {
  const pivot = left++;
  while (left <= right) {
    if (arr[left] < arr[pivot]) {
      left++;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      right--;
    }
  }
  [arr[pivot], arr[right]] = [arr[right], arr[pivot]];
  return right;
}
const a = [4, 2, 100, 99, 10000, -1, 99, 2];
console.log(quickSort(a));
