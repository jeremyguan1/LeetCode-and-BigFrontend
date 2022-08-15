/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }
  return true;
};

const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(canAttendMeetings(intervals));
