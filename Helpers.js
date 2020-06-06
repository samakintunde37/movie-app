export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export function timeConvert(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + "h" + " " + minutes + "min";
}
