function checkAge(age) {
    if (age < 0) {
        // We create a custom error to stop the program
        throw new Error("Age cannot be negative!");
    }
    return "Age is valid.";
}

try {
    checkAge(-5);
} catch (err) {
    console.log("Caught Error: " + err.message);
}
// Output: Caught Error: Age cannot be negative!