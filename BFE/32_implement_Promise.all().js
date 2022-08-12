/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  // your code here
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    if (promises.length === 0) {
      resolve(result);
      return;
    }
    promises.map((promise, idx) => {
      Promise.resolve(promise)
        .then((res) => {
          result[idx] = res;
          count++;
          if (count === promises.length) {
            return resolve(result);
          }
        })
        .catch((err) => reject(err));
    });
  });
}
