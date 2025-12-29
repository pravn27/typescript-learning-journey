var newPoint = { x: 12, y: 11 };
var user_1 = {
    id: 123,
    fName: "Praveen",
    lName: "Shekarappa",
    age: 34,
    sayHi: function () { return "Hello"; },
};
// user_person_1.id = 1212;
user_1.fName = "Arun";
var book_product = {
    name: "TS beginner",
    price: 100,
    applyDiscount: function (discount) {
        return this.price - this.price * (1 - discount);
    },
};
console.log(book_product.applyDiscount(0.6));
