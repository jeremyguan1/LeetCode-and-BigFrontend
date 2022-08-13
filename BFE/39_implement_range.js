/**
 * @param {integer} from
 * @param {integer} to
 */
function* range(from, to) {
  // your code here
  while (from <= to) {
    yield from++;
  }
}
