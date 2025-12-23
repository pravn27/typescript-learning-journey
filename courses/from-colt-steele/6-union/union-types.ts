// union types
let age: number | string = 23;
age = "24";

type Point = {
  x: number;
  y: number;
};

type ThreeDPoint = {
  x: number;
  y: number;
  z: number;
};

const graph: Point | ThreeDPoint = {
  x: 23,
  y: 34,
  z: 22,
};

function printAge(age: number | string): void {
  console.log(`You are ${age} years old !!`);
}

printAge(34);
printAge("35");

// type narrowing
function calTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price.replace("$", "");
  } else {
    price * tax;
  }
  // return price * tax;
}

// union type with arrays
const ageList: (number | string)[] = [12, 34, 66, "67", "34"];

// Literal types
let zero: 0 = 0;
// zero = 2;
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = "Angry";
