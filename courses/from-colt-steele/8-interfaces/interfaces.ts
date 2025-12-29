// Similar like type, describe the shape of Objects
interface Point {
  x: number;
  y: number;
}

const newPoint: Point = { x: 12, y: 11 };

// readonly & optional interface props, interface methods
interface NPerson {
  readonly id: number;
  fName: string;
  lName: string;
  nickName?: string;
  age: number;
  sayHi: () => string;
  //same as above interface method
  //sayHi(): string;
}

const user_1: NPerson = {
  id: 123,
  fName: "Praveen",
  lName: "Shekarappa",
  age: 34,
  sayHi: () => "Hello",
};
// user_person_1.id = 1212;
user_1.fName = "Arun";

// interface method parameters
interface Product {
  name: string;
  price: number;
  applyDiscount: (discount: number) => number;
}

const book_product: Product = {
  name: "TS beginner",
  price: 100,
  applyDiscount: function (discount) {
    return this.price - this.price * (1 - discount);
  },
};

console.log(book_product.applyDiscount(0.6));
