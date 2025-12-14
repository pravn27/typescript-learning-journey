// type string
let movieTitle: string = "3 Idiots";
// after 1 month
movieTitle = "Super";
movieTitle.tooUpperCase();
// after 2 months
movieTitle = 12;

// type number & boolean
let userAge: number = 34;
userAge = userAge + 2;
userAge = 40;
userAge = "zero";

let isTypeScriptEasy: boolean = true;
isTypeScriptEasy = false;
isTypeScriptEasy = "true";

// Type Inference
let fullName = "Praveen S";
fullName = 12;

let isCool = false;
isCool = "true";

let userCount = 120;
userCount = "ten";

// any type
let age: any = 30;
age = "one";
age = "50";
age.toUpperCase();

// prevent implicit any type
const users = ["praveen", "arun", "kumar", "anvesh"];
// How to prevent any type ?
// By adding type annotation
let getUser: string;

for (let user of users) {
  if (user === "praveen") {
    getUser = "praveen";
  }
}
getUser = 45;
getUser = true;
