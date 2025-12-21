// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
gameBoard.push(["test"]);
var p1 = {
    name: "Tea mug",
    price: 12,
};
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    var sum = 0;
    products.map(function (product) {
        sum = sum + product.price;
    });
    return sum;
}
var prodList = [
    {
        name: "Tea bag",
        price: 12,
    },
    {
        name: "Coffee bag",
        price: 15,
    },
    {
        name: "Mug",
        price: 10,
    },
];
console.log(getTotal(prodList));
