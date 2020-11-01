module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  let result = ``;
  arr.forEach(item => {
    if (typeof item === `string`) {
      result += item.trim()[0].toUpperCase();
    }
  });
  return result.split(``).sort().join(``);
};
