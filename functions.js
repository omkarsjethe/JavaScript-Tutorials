function hello(){
    console.log("Hello my name is omkar")
}
hello()

function sumin(){
    let a =5
    let b = 10
    console.log("Sum of a + b is :",a+b)
}
sumin()

function sum(a,b){
    console.log("Sum of a + b is :",a + b)
}
sum(2,3)
sum(5,6)


// Calculator 
function sumcal(a,b){
    console.log("Sum of a + b is ", a + b)
}
function mulcal (a,b){
    console.log("Multiplication  of a * b is ", a * b)
}
function divcal(a, b){
    console.log("Divison of a / b is ", a / b)
}
function subcal (a, b){
    console.log("Substraction of a - b is ",a-b)
}
sumcal(4,5)
mulcal(6,7)


function addnumber(a,b){
    let sum = a +b; 
    return sum ;
}
let result =addnumber(9,10);
console.log("Result is ",result)


function addition(a, b){
    return a + b ;
}
add = addition(10,19)
console.log("Sum of two numbers are ",add)

// Fat  arrow 

const ad = (a,b) => {
    return a + b
}

// 1. Standard Function Declaration
function calculateArea(width, height) {
    const area = width * height;
    return area;
}

// 2. Calling the function
let kitchenArea = calculateArea(10, 10);
let bedroomArea = calculateArea(12, 15);

console.log("Kitchen Size:", kitchenArea); // 100
console.log("Bedroom Size:", bedroomArea); // 180

// 3. Arrow Function Equivalent
const calculatePerimeter = (width, height) => {
    return 2 * (width + height);
};

console.log("Kitchen Perimeter:", calculatePerimeter(10, 10)); // 40

