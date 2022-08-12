/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target) {
  // your code here
  let start = 0;
  let end = arr.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
