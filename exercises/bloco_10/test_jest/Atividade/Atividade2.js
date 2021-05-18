function encode(array) {
  for (let index = 0; index < array.length; index += 1) {
    array = array.replace('a', '1');
    array = array.replace('e', '2');
    array = array.replace('i', '3');
    array = array.replace('o', '4');
    array = array.replace('u', '5');
  }
  return array;
}

function decode(array) {
  for (let index = 0; index < array.length; index += 1) {
    array = array.replace('1', 'a');
    array = array.replace('2', 'e');
    array = array.replace('3', 'i');
    array = array.replace('4', 'o');
    array = array.replace('5', 'u');
  }
  return array;
}




module.exports = {
  encode,
}