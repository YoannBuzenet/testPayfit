function transformArrayIntoDictionnaryWithKey(array, key = "id") {
  var dictionnaryToReturn = {};

  if (array) {
    for (let i = 0; i < array.length; i++) {
      dictionnaryToReturn[array[i][key]] = array[i];
    }
  }

  return dictionnaryToReturn;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  capitalizeFirstLetter,
  transformArrayIntoDictionnaryWithKey,
};
