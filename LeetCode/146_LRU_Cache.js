/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.maxSize = capacity;
  this.tracker = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.tracker.has(key)) {
    let curr = this.tracker.get(key);
    this.tracker.delete(key);
    this.tracker.set(key, curr);
    return curr;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.tracker.has(key)) this.tracker.delete(key);
  this.tracker.set(key, value);
  if (this.tracker.size > this.maxSize) {
    this.tracker.delete(this.tracker.keys().next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
