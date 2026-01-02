let lname: string = "Keshab Sen";
// about npx tsc : npx tsc is a command that allows you to run the TypeScript compiler (tsc) without having to install it globally on your system.

let newName = lname.toUpperCase();
console.log(newName);

let age: number;
age = 20;
// age = "25" -> gives an error
let ageString = age.toString();
console.log(ageString);

let isValid: Boolean;
// console.log(isValid); -> produce output "undefined" : javascript dont know about types
// as we complie ts into js it shows undefined

isValid = true;
console.log(isValid);

// arrays
// two ways of declaring array in typescript
// 1. type[]
// 2. Array<type>
// about array : Arrays in TypeScript are used to store multiple values of the same type in a single variable.
// They provide a way to group related data together and perform operations on that data collectively.

let empList: string[];
empList = ["Keshab", "Keshab2"];
// OR
let numList: Array<number>;
numList = [1, 2, 3, 4, 5, 6, 7, 8];
let results = numList.filter((num) => num < 5);
console.log(results);
let emp = empList.find((emp) => emp === "Keshab");
console.log(emp);
let sum = numList.reduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
}, 0);
console.log(sum);

enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

// tuples
// about tuples : Tuples are special arrays with fixed number of elements where elements need not be of same type and order matters.
let swapNumbs: [number, number];
function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[0]);

// any type
// about any type : The any type in TypeScript is a powerful feature that allows you to opt-out of type checking for a particular variable.
// When a variable is declared with the any type, it can hold values of any type, and TypeScript will not perform any type checking on it.
// Dont use it a lot as it removes the benefits of typescript
let randomValue: any = 10;
randomValue = true;
randomValue = "Keshab";
console.log(randomValue);

// Functions
// Different ways to declare functions in typescript

// 1. function keyword
// about function keyword : In TypeScript, the function keyword is used to declare a function.
// It allows you to define a reusable block of code that can take parameters, perform operations, and return a value.
function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add(5, 10));

// 2. anonymous function
// about anonymous function : An anonymous function in TypeScript is a function that is defined without a name.
// It is often used as a callback function or assigned to a variable for later use.
let subtract = function (num1: number, num2: number): number {
  return num1 - num2;
};
console.log(subtract(10, 5));

// 3. arrow function
// about arrow function : An arrow function in TypeScript is a concise way to define a function using the "=>" syntax.
// It provides a shorter syntax compared to traditional function expressions and lexically binds the "this" value.
// Example of "binding" this value : between arrow function and normal function this value differs
// Here in arrow function this refers to the surrounding context whereas in normal function this refers to the function itself
// In the below example if we use normal function instead of arrow function then this.age will be undefined
class Person {
  age: number;
  constructor(age: number) {
    this.age = age;
  }
  growUp() {
    setTimeout(() => {
      this.age++;
      // Here this is referenced to the Person class instance, which has an age property.
      console.log(this.age,"after 1 second");
    }, 1000);
  }
}
let person = new Person(20);
person.growUp();

// example of binding "this" using normal function
class PersonNormal {
  age: number;
  constructor(age: number) {
    this.age = age;
  }
  growUp() {
    setTimeout(function (this: PersonNormal) {
      this.age++; // here this will be undefined
      // Here this is referenced to the function itself, which does not have an age property, leading to undefined behavior.
      console.log(this.age, "after 1 second");
    }, 1000);
  }
}
let person1 = new PersonNormal(20);
person1.growUp();

let multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};
console.log(multiply(5, 10));

// void type
// about void type : The void type in TypeScript is used to indicate that a function does not return a value.
// It is typically used for functions that perform actions but do not produce a meaningful result.
function logMessage(message: string): void {
  console.log(message);
}
logMessage("Hello, TypeScript!");

// Rest Operators
// about rest operators : The rest operator in TypeScript allows you to represent an indefinite number of arguments as an array.
function addNumbers(...nums: number[]): number {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(addNumbers(1, 2, 3, 4, 5));

// about spread operator : The spread operator in TypeScript allows you to expand an array or object into individual elements or properties.
// It is represented by three dots (...) followed by the array or object to be expanded.
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];
let combinedArr: number[] = [...arr1, ...arr2];
console.log(combinedArr);

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);


// Generic Functions
// about generic functions : Generic functions in TypeScript allow you to create reusable components that can work with different data types 
// while maintaining type safety.
function getArray<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
  // Here, T is a placeholder for a type that will be specified when the function is called.
  // new Array<T>() creates a new array that can hold elements of type T.
  // .concat(items) adds the elements from the items array to the newly created array and returns it.
}
let numberArray = getArray<number>([1, 2, 3, 4, 5]);
let stringArray = getArray<string>(["Keshab", "Sen"]);
console.log(numberArray);
console.log(stringArray);