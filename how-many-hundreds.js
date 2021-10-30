function howManyHundreds (num) {
  let numbers = (num/100);
  numbers = Math.floor(numbers);
  return numbers;
}
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));