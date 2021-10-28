//example of a conditional statement
const temprature = -20;
if (temprature<0) {
  console.log("Make sure you pick out a scarf!");
} else if (temprature<15) {
  console.log("Short sleeves won't cut it !");
} else {
  console.log (" Short sleeves are fine.");
}
console.log(" Now you're ready to go outside!");

//another example with logical operator
// excecute code if both conditions are met.
const isCitizen = true;
const age = 26;

if (isCitizen && age>18) {
  console.log("You are eligible to vote");
}

//another example on conditionals logical operators

if (temprature < -40 || temprature> 40) {
  console.log("Maybe going outside isn't such a great idea");
}

//example on logical operator
// execute code if the condition value is the reverse
const raining = false;
if (!raining) {
  console.log ("Leave your umbrellas at home!");
}
