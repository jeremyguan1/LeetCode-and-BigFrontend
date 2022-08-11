class NodeStore {
  constructor() {
    this.currentMap = {};
  }

  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    node.__yoloKing__ = Symbol();
    this.currentMap[node.__yoloKing__] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.currentMap[node.__yoloKing__];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return !!this.currentMap[node.__yoloKing__];
  }
}
