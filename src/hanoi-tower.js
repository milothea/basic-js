const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const steps = 2**disksNumber - 1;

  return {turns: steps, seconds: Math.floor(steps / (turnsSpeed / 60**2))};
};
