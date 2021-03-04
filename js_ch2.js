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
