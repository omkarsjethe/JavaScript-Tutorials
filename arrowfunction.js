let a = (a,b) => {
    return a * b
};
console.log(a(30,12));

let b =(a) => a*a ;
console.log(b(6));

// Use Strings
let name = () => console.log("My name is Omkar ");
name()

//Arrow Functions Returning Object

let nameobj = () => ({name: "Omkar", age: 24});
console.log(nameobj().name);