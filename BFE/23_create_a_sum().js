/**
 * @param {number} num
 */
function sum(num) {
  // your code here
  const adding = (nums2) => {
    return nums2 ? sum(num + nums2) : num;
  };

  adding.valueOf = () => num;

  return adding;
}
