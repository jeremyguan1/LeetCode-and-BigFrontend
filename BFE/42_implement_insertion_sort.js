/**
 * @param {number[]} arr
 */
function insertionSort(arr) {
  // your code here

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && current < arr[j]) {
      arr[j + 1] = arr[j];
      --j;
    }
    arr[j + 1] = current;
  }
  return arr;
}

const a = [4, 2, 100, 99, 10000, -1, 99, 2];
console.log(insertionSort(a));
