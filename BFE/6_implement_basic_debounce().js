// This is a JavaScript coding problem from BFE.dev

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  // your code here
  let timeId = null;

  return (...args) => {
    clearTimeout(timeId);
    timeId = setTimeout(() => func(args), wait);
  };
}
