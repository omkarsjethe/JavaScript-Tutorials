text = "Omkar"

console.log(text[1])
console.log(text[4])

console.log(text.length)

console.log(text.toUpperCase());
console.log(text.toLowerCase());

let a ="Omkar Jethe"

console.log(a.slice(0,2));

let b = "I love Java "
let replacetext=b.replace("Java","Javascript")
console.log(replacetext)

let data = "Apple,Banana,Kiwi";
let fruits = data.split(","); 
console.log(fruits); // ["Apple", "Banana", "Kiwi"]

let name = "Omkar";
let age = 25;
let greeting = "Hello, my name is " + name + " and I am " + age + " years old.";

// 1. Trim (Removes whitespace from start and end)
let original = "  FrontEnd Developer  ";
let cleanText = original.trim();
console.log("Trimmed:", cleanText);

// 2. Check if it includes a word
// Note: It is case-sensitive!
let hasDev = cleanText.includes("Developer");
console.log("Includes 'Developer'?", hasDev);

// 3. Extracting a specific character
console.log("Character at index 0:", cleanText.charAt(0)); // "F"

// 4. Real-world example: Masking a credit card
let card = "1234567812345678";
let last4 = card.slice(-4); // Negative numbers count from the end!
let masked = "************" + last4;
console.log("Masked Card:", masked);