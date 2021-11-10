function lastIndexOf(array, value){
  let position = array[0];
  let lastIndex = -1 ;

  if (array.length === 0 || isNaN(value)){
    return lastIndex;
  }

  for (let i = 0; i < array.length; i++){
    if (value === array[i]){
      lastIndex = i;
    }
  }
  return lastIndex;

}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);