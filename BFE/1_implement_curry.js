// This is a JavaScript coding problem from BFE.dev

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // your code here
  return function test(...args) {
    console.log(args);
    if (fn.length <= args.length) {
      return fn(...args);
    }
    return function (args2) {
      console.log(args2);

      return test(...args, ...args2);
    };
  };
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

curriedJoin(1, 2)(3); // '1_2_3'
