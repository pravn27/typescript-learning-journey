// type annotation for Objects in function parameters
function getName(person: { fName: string; lName: string }) {
  console.log(`Full name is ${person.fName} ${person.lName}`);
}

getName({
  fName: "Praveen",
  lName: "Shekarappa",
});

type Points = {
  x: number;
  y: number;
};

// variable object type annotation
const coordinates: Points = {
  x: 34,
  y: 100,
};

// function return type of objects annotation
function randomCoordinates(): Points {
  return {
    x: Math.random(),
    y: Math.random(),
  };
}

// Type Aliases, to reuse the shape of objects
type Person = {
  fName: string;
  lName: string;
  age: number;
  isAdmin: boolean;
};

function getUserDetails(user: Person): Person {
  return user;
}

const user1 = {
  fName: "Praveen",
  lName: "Shekarappa",
  age: 34,
  isAdmin: true,
};

getUserDetails(user1);
