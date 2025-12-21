// array types
const activeUsers: string[] = ["Praveen", "Arun", "Kumar"];
activeUsers.push("Anil");
// activeUsers.push(10);

const oldAgeList: number[] = [89, 75, 98, 95, 78];
oldAgeList.push(73);
// oldAgeList.push("Ninety");

// Alternative array types as above
const usersList: Array<string> = ["Colt", "Steve", "Bert"];
const bools: Array<boolean> = [true, false, true];

// custom types with arrays
type User = {
  name: string;
  location: string;
  age: number;
};

const userDetailsList: User[] = [];
userDetailsList.push({
  name: "Praveen",
  location: "Bangalore",
  age: 34,
});

// multi dimensional / nesting level of arrays
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];
