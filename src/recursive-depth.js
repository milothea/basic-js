module.exports = class DepthCalculator {

  calculateDepth(arr, depth = 1) {
    let currentDepth = depth,
        self = this;

    arr.forEach( item => {
      if (Array.isArray(item)) {

        const itemDepth = self.calculateDepth(item, depth + 1);

        currentDepth = (itemDepth > currentDepth) ? itemDepth : currentDepth;
      }
    });

    return currentDepth;
  }
};
