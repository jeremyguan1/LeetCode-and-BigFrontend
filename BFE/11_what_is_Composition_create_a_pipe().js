/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  // your code here
  return (num) =>
    funcs.reduce((prev, current) => {
      return current(prev);
    }, num);
}
