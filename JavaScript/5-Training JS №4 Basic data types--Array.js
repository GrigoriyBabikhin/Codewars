let arr = [1, 2, 3];
function getLength(arr) {
  //return length of arr
  return arr.length;
}
console.log(getLength(arr));

function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
console.log(getFirst(arr));

function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1];
}
console.log(getLast(arr));

function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(el);
  return arr;
}
console.log(pushElement(arr));

function popElement(arr) {
  //pop an element from arr
  arr.pop();
  return arr;
}
console.log(popElement(arr));
