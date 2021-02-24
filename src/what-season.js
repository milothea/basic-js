const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date)) {
    throw new Error ('Invalid date format! Use "new Date" to create valid date.');
  }
  try {
    date.valueOf();
  } catch (e) {
    throw new Error ('Invalid date format! Use "new Date" to create valid date.');
  }

  const month = date.getMonth();

  if (2 <= month && month <=4 ) {
    return 'spring';
  } else if (5 <= month && month <= 7) {
    return 'summer';
  } else if (8 <= month && month <= 10) {
    return 'autumn';
  } else {
    return 'winter';
  }
};
