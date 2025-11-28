let animal = "Monkey";

switch( animal ){
    case "cat":
        case "cat" :
            console.log("Its a Cat")
        break
    case "lion":
        case "lion":
            console.log("Its a lion ")
        break
    case "Monkey" :
        case "Monkey":
            console.log("Its a Monkey ")
        break
    default :
        console.log("Never heard about it ")
        }


// 1. Define the student's score
let score = 85;
let grade;

// 2. The switch statement
// We switch on 'true' so we can check boolean conditions in the cases
switch (true) {
    case (score >= 90):
        grade = "A";
        break; // Stops checking once a match is found

    case (score >= 80):
        grade = "B";
        break;

    case (score >= 70):
        grade = "C";
        break;

    case (score >= 60):
        grade = "D";
        break;

    // 3. The 'default' acts as the 'else' (for anything below 60)
    default:
        grade = "F";
}

console.log("Score:", score);
console.log("Grade:", grade);

let letterGrade = "B";

switch (letterGrade) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
    case "C": // You can stack cases! This runs for B or C.
        console.log("Well done.");
        break;
    case "D":
        console.log("You passed.");
        break;
    case "F":
        console.log("Failed.");
        break;
    default:
        console.log("Invalid Grade");
}