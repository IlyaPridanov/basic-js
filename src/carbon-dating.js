const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
const LOGARIFM_2 = 0.693;

module.exports = function dateSample(sample) {
  const float = parseFloat(sample);
  const num = parseInt(sample, 10);
  if (isNaN(num) || (typeof sample !== `string`) || num <= 0 || num > MODERN_ACTIVITY || float !== num) {
    return false;
  }
  const result = Math.log2(MODERN_ACTIVITY / num) / (LOGARIFM_2 / HALF_LIFE_PERIOD);
  return Math.ceil(result);
};
