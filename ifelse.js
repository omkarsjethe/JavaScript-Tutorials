let num = 24;

if (num % 2 == 0){
    console.log("Even number")}
else{
    console.log("Odd Number")
}


let storedPassword = "secret123";
let enteredPassword = "Secret123"; // Note the capital 'S'

// The strict equality operator (===) checks for both value and type
if (enteredPassword === storedPassword) {
  console.log("Access Granted! Welcome back.");
} else {
  console.log("Access Denied! Incorrect password. Please try again.");
}

let currentTemp = 15;
let idealTemp = 20;

if (currentTemp < idealTemp) {
  console.log("It's a bit chilly. You might want to grab a jacket!");
} else {
  console.log("The weather is nice and warm. Enjoy your day!");
}