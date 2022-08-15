/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  let start = [...intervals].sort((a, b) => a[0] - b[0]);
  let end = [...intervals].sort((a, b) => a[1] - b[1]);
  let room = 0;
  let j = 0;

  for (let i = 0; i < start.length; i++) {
    if (start[i][0] < end[j][1]) {
      room++;
    } else {
      j++;
    }
  }
  return room;
};

const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];

console.log(minMeetingRooms(intervals));
