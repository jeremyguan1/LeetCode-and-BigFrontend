/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(arr, start, end, k) {
  const pivotIndex = partition(arr, start, end);

  if (k < arr.length - pivotIndex) {
    return quickSelect(arr, pivotIndex + 1, end, k);
  } else if (k > arr.length - pivotIndex) {
    return quickSelect(arr, start, pivotIndex - 1, k);
  }
  return arr[pivotIndex];
}

function partition(arr, start, end) {
  let left = start;
  let pivot = arr[end];
  let right = end - 1;

  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  swap(arr, left, end);
  return left;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;

console.log(findKthLargest(nums, k));
