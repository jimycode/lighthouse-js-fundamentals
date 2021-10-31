function merge (array1, array2) {
 let restul = array1.concat (array2);
 restul.sort();
return restul;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));