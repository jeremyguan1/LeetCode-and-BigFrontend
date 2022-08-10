/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  // your code here
  const libray = new Map();

  return function (...args) {
    const key = resolver ? resolver(...args) : args.join("_");
    if (!libray.has(key)) {
      libray.set(key, func.apply(this, args));
    }
    return libray.get(key);
  };
}

const memoed = memo(func, () => "samekey");

memoed(1, 2);
// 3, func is called, 3 is cached with key 'samekey'

memoed(1, 2);
// 3, since key is the same, 3 is returned without calling func

memoed(1, 3);
