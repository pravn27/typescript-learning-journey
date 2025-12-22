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
