/**
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.library = [];
  this.maxSize = size;
  this.currentMax = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.maxSize == this.library.length) {
    this.currentMax -= this.library.shift();
  }

  this.library.push(val);
  this.currentMax += val;

  return this.currentMax / this.library.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
