/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function (clips, time) {
  clips.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  let answer = 0;
  let start = 0;
  let end = 0;
  let i = 0;
  while (end < time) {
    while (i < clips.length && clips[i][0] <= start) {
      end = Math.max(end, clips[i++][1]);
    }
    if (start === end) return -1;
    answer++;
    start = end;
  }

  return answer;
};
