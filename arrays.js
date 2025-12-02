let a =["Omkar","Sharad","Jethe"]

console.log(a)

let num = [24,25,26,24,23,23]

console.log(num)


// acesssing arrays element 

console.log(a[1])
console.log(num[3])


// Length of arrays

console.log(a.length)
console.log(num.length)

// Adding elements in arrays

console.log(a.push("Bandra"))
console.log(num.push(23))

console.log(a)
console.log(num)

// removing elements in arrays

console.log(a.pop())
console.log(a)


// Add elements in start of arrays

console.log(num.unshift(45))
console.log(num)

// removing the first elements

console.log(num.shift())
console.log(num)

const cart = [
    { item: "Laptop", price: 1000 },  // Index 0
    { item: "Mouse", price: 25 },     // Index 1
    { item: "Keyboard", price: 50 }   // Index 2
];

console.log(cart[0].price)


let student= []

let student1 = {
    name :"Omkar", city : "Mumbai"
}

let student2 = {
    name : "yash" , city : "Berlin"
}

student.push(student1)
student.push(student2)

console.log(student)

console.log(student[0].city)


const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
console.log(position)


console.log(fruits.includes("Mango")); // is true

console.log(num.reverse())
console.log(num.sort())
console.log(num.toSorted())
console.log(num.toReversed())