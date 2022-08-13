/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
  // your code here

  if (promises.length === 0) return Promise.resolve([]);
  let results = [];
  let count = 0;

  return new Promise((resolve) => {
    promises.map((promise, i) => {
      Promise.resolve(promise)
        .then((value) => {
          results[i] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[i] = { status: "rejected", reason };
        })
        .finally(() => {
          count++;
          if (count === promises.length) resolve(results);
        });
    });
  });
}
