let marks = 78 ;

if (marks > 90 ){
    console.log("Grade A")
}
else if (marks > 80 && marks <89 ){
    console.log("Grade B")
}
else if (marks >70 && marks < 79 ){
    console.log("Grade C")
}
else {
    console.log("Average ")
}

let hour = 14; // Represents 2 PM

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 17) {
  console.log("Good afternoon!"); // This code runs because 14 < 17 is true, and the first condition (14 < 12) was false.
} else {
  console.log("Good evening!");
}
// Output: Good afternoon!

/**
 * Program 1: Temperature Status Checker
 * Determines the status based on a given temperature (in Celsius).
 */
function checkTemperatureStatus(temp) {
  if (temp <= 0) {
    console.log(`${temp}°C is Freezing.`);
  } else if (temp > 0 && temp <= 15) {
    console.log(`${temp}°C is Cold.`);
  } else if (temp > 15 && temp <= 25) {
    console.log(`${temp}°C is Warm.`);
  } else { // temp > 25
    console.log(`${temp}°C is Hot.`);
  }
}

console.log("--- Program 1 Output ---");
checkTemperatureStatus(-5); // Freezing
checkTemperatureStatus(10);  // Cold
checkTemperatureStatus(22);  // Warm
checkTemperatureStatus(30);  // Hot


/**
 * Program 2: Discount Calculator
 * Applies a tiered discount based on the purchase amount.
 */
function calculateDiscount(amount) {
  let discount = 0;

  if (amount >= 500) {
    discount = 0.20; // 20% discount
  } else if (amount >= 200) {
    discount = 0.10; // 10% discount
  } else if (amount >= 50) {
    discount = 0.05; // 5% discount
  } else {
    discount = 0;    // No discount
  }

  let discountAmount = amount * discount;
  let finalPrice = amount - discountAmount;

  console.log(`Original Price: $${amount.toFixed(2)}`);
  console.log(`Discount Applied: ${(discount * 100).toFixed(0)}%`);
  console.log(`Final Price: $${finalPrice.toFixed(2)}`);
}

console.log("\n--- Program 2 Output ---");
calculateDiscount(650); // Gets 20%
calculateDiscount(150); // Gets 5%
calculateDiscount(35);  // Gets 0%

/**
 * Program 3: Day of the Week Lookup
 * Converts a number (1-7) into the corresponding day name.
 */
function getDayName(dayNumber) {
  let dayName;

  if (dayNumber === 1) {
    dayName = "Monday";
  } else if (dayNumber === 2) {
    dayName = "Tuesday";
  } else if (dayNumber === 3) {
    dayName = "Wednesday";
  } else if (dayNumber === 4) {
    dayName = "Thursday";
  } else if (dayNumber === 5) {
    dayName = "Friday";
  } else if (dayNumber === 6 || dayNumber === 7) {
    dayName = "Weekend Day"; // Combining Saturday and Sunday
  } else {
    dayName = "Invalid Day Number";
  }

  console.log(`Day ${dayNumber}: ${dayName}`);
}

console.log("\n--- Program 3 Output ---");
getDayName(3); // Wednesday
getDayName(6); // Weekend Day
getDayName(10); // Invalid Day Number