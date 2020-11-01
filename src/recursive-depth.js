module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let index = 1;
    let depth = 1;
    for (let el of arr) {
      if (Array.isArray(el)) {
        index = 1 + this.calculateDepth(el);
        if (index > depth) {
          depth = index;
        }
      }
    }
    index = 1;
    return depth;
  };
}
