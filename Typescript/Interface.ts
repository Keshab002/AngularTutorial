// Interfaces
// Why Interfaces?
// Interfaces define the structure of an object, specifying the properties and methods it should have.
// They help in enforcing contracts, promoting code consistency, and enabling polymorphism.

export interface User {
  name: string;
  age: number;
  id: number;
  email?: string; // Optional property
}

let user1: User = {
  name: "John Doe",
  age: 30,
  id: 1,
};

console.log(`User Name: ${user1.name}, Age: ${user1.age}, ID: ${user1.id}`);

interface Employee extends User {
  salary: number;
}

let emp1: Employee = {
  name: "Jane Smith",
  age: 28,
  id: 2,
  salary: 50000,
};
console.log(`Employee Name: ${emp1.name}, Salary: ${emp1.salary}`);

export interface Login {
  // This is a method signature in the Login interface.
  // Any class that implements this interface must provide an implementation for this method.
  // The method Login is expected to return an object of type User.
  Login(): User;
}

// Object distructiuring
let { name, age } = user1;
console.log(`Destructured Name: ${name}, Age: ${age}`);

// Object destructuring with renaming
// Renaming 'id' to 'userId' during destructuring

let { id: userId } = user1;
console.log(`Destructured User ID: ${userId}`);

// Array distructuring
// Skipping elements during destructuring
// Here, we skip the 4th element (index 3) of the array
// and only extract the first three elements and the rest of the elements into 'rest' array
let numbers: number[] = [10, 20, 30,40,50,300,100,20,400,500];
let [first, second, third, ...rest] = numbers;
console.log(`First: ${first}, Second: ${second}, Third: ${third}, Rest: ${rest}`);

let result = rest.filter((num) => num > 100);
console.log(`Filtered Rest (num > 100): ${result}`);


// Decorators
// Why Decorators?
// Decorators provide a way to add metadata or modify the behavior of classes and their members.
// They enable aspect-oriented programming, code reuse, and separation of concerns.

function Logger(target: Function) {
  console.log(`Class Decorator called on: ${target.name}`);
}

@Logger
class SampleClass {
  name = "Keshab";
}

