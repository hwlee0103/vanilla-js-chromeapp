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
