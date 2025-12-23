// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff;
var skill1 = "Advanced";
skill1 = "Expert";
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [
    { r: 12, g: 2, b: 4 },
    { h: 1, s: 2, l: 5 },
];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(message) {
    if (typeof message === "string") {
        console.log("Hello, ".concat(message));
    }
    else {
        for (var _i = 0, message_1 = message; _i < message_1.length; _i++) {
            var name_1 = message_1[_i];
            console.log("Hello, ".concat(name_1));
        }
    }
}
greet("Praveen");
greet(["Kumar", "Arun", "Anil", "Arul"]);
