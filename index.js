console.log("Im Working. Im JS. Im Beautiful. Im worth it");
let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);

const c = 221;
let d = c - 5;
//c = 4;
console.log(d, c);

// String
const what = "Nicolas";
console.log(what);

//boolean
const boolwhat = true;
console.log(boolwhat);

//number
//no need to talk lol

//float
const wat = 55.1;
console.log(wat);

//list
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
//not efficient
console.log(monday, tue, wed, thu, fri);
//use array
const some = "something";
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", true, 123, 34.34, some];
console.log(daysOfWeek);

//objects
const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Along the gods", "LOTR", "Oldboy"],
  favFood: [
    { name: "Kimchi", fatty: false },
    { name: "Cheese burger", fatty: true },
  ],
};
console.log(nicoInfo);
console.log(nicoInfo.gender);

nicoInfo.gender = "Female";

console.log(nicoInfo.favFood[0].fatty);

//console
console.log(console);

//function
console.log("Greetings Nicolas");
console.log("Hello Jun");
console.log("Hello Liyn");
console.log("Hello Dal");

function sayHello(name, age) {
  //console.log("Hello!", name, "you have", age, "years of age.");
  console.log(`Hello ${name} you are ${age} years old`);
}

sayHello("Nicolas", 15);

function sayHello2(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

let greetNicolas = sayHello("Nicolas", 14);
console.log(greetNicolas);
greetNicolas = sayHello2("Nicolas", 14);
console.log(greetNicolas);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b == 0) return `not possible`;
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
const plus = calculator.plus(5, 5);
console.log(plus);
const minus = calculator.minus(120, 50);
console.log(minus);
const multiply = calculator.multiply(3, 8);
console.log(multiply);
let divide = calculator.divide(45, 0);
console.log(divide);
divide = calculator.divide(45, 5);
console.log(divide);
const power = calculator.power(2, 5);
console.log(power);
