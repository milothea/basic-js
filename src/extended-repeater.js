module.exports = function repeater(str, options) {
  console.log(str, options);

  let newStr = str,
      {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;

  if (additionRepeatTimes || addition) {
    newStr += transformStr(addition, additionSeparator, additionRepeatTimes, true);
  }

  return transformStr(newStr, separator, repeatTimes);

  function transformStr(string, separator, repeats, add = false) {
    let sep = '',
        repTimes = (repeats) ? repeats : 1;
        transformedStr = string,
        cycleCounter = (repTimes * 2) - 1;

    if (add) {
      sep = (separator) ? separator : '|';
    } else {
      sep = (separator) ? separator : '+';
    }

    for (let i = 1; i < cycleCounter; i++) {
      if (i % 2 != 0) {
        transformedStr += sep;
      } else {
        transformedStr += string;
      }
    }

    return transformedStr;
  }
};
  