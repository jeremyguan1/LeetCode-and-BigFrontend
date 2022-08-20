/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let count = 0;
  let tracker = new Array(60).fill(0);

  for (let t of time) {
    let val = t % 60;
    count += tracker[(60 - val) % 60];
    tracker[val]++;
  }
  return count;
};
