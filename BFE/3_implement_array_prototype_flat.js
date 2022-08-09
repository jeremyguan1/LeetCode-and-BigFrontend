// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  // your imeplementation here
  if (depth === 0) {
    return arr;
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth !== 0) {
      result.push(...flat(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const arr = [1, [2], [3, [4]]];

flat(arr);
// [1, 2, 3, [4]]

flat(arr, 1);
// [1, 2, 3, [4]]

flat(arr, 2);
// [1, 2, 3, 4]
