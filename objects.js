let info = {
    name : "Omkar", surname : "Jethe", age :"26"
}
console.log("Name is :",info.name)


let cars= {}

info.name = ("BMW")
info.model= ("M5")

let display = cars

console.log("Car is ",display)

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

console.log("fATHER NAME IS ",Person.myFather)