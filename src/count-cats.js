const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let cats = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].indexOf("^^") != -1) {
      cats += matrix[i].filter( item => {
        if (item === "^^") {
          return item;
        }
      }).length;
    }
  }

  return cats;
};
