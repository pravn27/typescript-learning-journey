function square(num: number): number {
  return num * num;
}

square(3);
square("test");
square(true);

function greet(person: string) {
  return `Hi there, ${person}!`;
}

greet("Praveen");
greet(3);

// function with 2 or more parameters & its types
function getUserDetails(userId: number, country: string, state: string) {
  return `User has ${userId}, ${country}, ${state}`;
}

getUserDetails(3232, "IND", "KA");
getUserDetails(3232, "IND", true);

// default parameters
function greet_1(person: string = "Stranger"): string {
  return `Hi there, ${person}!`;
}

greet_1();

// function return type annotation
const add2Num = (num1: number, num2: number): number => {
  return num1 + num2;
};

add2Num(2, 3);

// function can return multiple types
const genRandom = (num: number) => {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
};

// Anonymous functions
const colors = ["red", "blue", "green"];
const formattedColors = colors.map((color) => color.toUpperCase());

// void type
function nothing(): void {
  console.log("nothing returns");
}

// never type - used where function did not get a chance to run completely or getting some error in middle
function makeError(msg: string): never {
  throw new Error(msg);
}
