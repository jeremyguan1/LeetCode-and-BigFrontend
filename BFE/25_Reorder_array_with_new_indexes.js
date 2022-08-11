/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
  // reorder items inline

  let start = 0;

  while (start < items.length) {
    let changedLocation = newOrder[start];
    if (start === changedLocation) {
      start++;
      continue;
    }
    swap(items, start, changedLocation);
    swap(newOrder, start, changedLocation);
  }
}

function swap(arr, start, to) {
  [arr[start], arr[to]] = [arr[to], arr[start]];
}
