/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return {
    css: function (property, value) {
      el.style[property] = value;
      return this;
    },
  };
}
