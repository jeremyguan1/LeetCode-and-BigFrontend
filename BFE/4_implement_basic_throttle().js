// This is a JavaScript coding problem from BFE.dev

/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
  // your code here
  let waited = false;
  let lastArgs = null;

  return (...args) => {
    if (!waited) {
      waited = true;
      func(args);
      let request = () =>
        setTimeout(() => {
          waited = false;
          if (lastArgs !== null) {
            func(lastArgs);
            waited = true;
            lastArgs = null;
            request();
          }
        }, wait);
      request();
    } else {
      lastArgs = args;
    }
  };
}
