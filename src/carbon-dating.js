const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const sample = +sampleActivity;

  if (typeof sampleActivity != 'string' ||
      isNaN(sample) ||
      sample <= 0 ||
      sample > MODERN_ACTIVITY) {
    return false;
  }
  return Math.ceil((Math.log(MODERN_ACTIVITY / sample)) / (0.693 / HALF_LIFE_PERIOD));
};
