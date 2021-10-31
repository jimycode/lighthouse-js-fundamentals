function concat (array1, array2) {
  let result = [];
  for (let num of array1) {
   result.push(num);
 }
  for (let num of array2) {
   result.push(num)
 }
  return result;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
console.log(concat([], [ 9, 7, 2 ]));
console.log(concat([ 5, 10 ], []));