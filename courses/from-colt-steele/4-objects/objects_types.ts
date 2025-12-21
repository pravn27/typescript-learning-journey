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

// Nested object types annotation
type Company = {
  name: string;
  branch: string[];
  headQuarters: {
    street: string;
    city: string;
    zipCode: number;
  };
};

const techCompany: Company = {
  name: "Xactly corp",
  branch: ["IN", "CA", "DE"],
  headQuarters: {
    street: "Innovation tech park",
    city: "Bangalore",
    zipCode: 1211121,
  },
};

function getCompanyLocation(company: Company): void {
  console.log(`Location is ${company.headQuarters.city}`);
}

getCompanyLocation(techCompany);

// optional properties using ?, z point is optional
type Point1 = {
  x: number;
  y: number;
  z?: number;
};

const dPoint: Point1 = {
  x: 23,
  y: 43,
};

// readonly modifier to property, make is prop as read only
// readonly is from typescript layer
type User = {
  readonly id: number;
  name: string;
};
const user: User = {
  id: 1311,
  name: "Praveen",
};
console.log(user.id);
// user.id = 4455;

// Intersection types using &, for combining 2 or more types
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorFulCircle = Circle &
  Colorful & {
    diameter: number;
  };

const happyFace: ColorFulCircle = {
  radius: 24,
  color: "red",
  diameter: 12,
};
