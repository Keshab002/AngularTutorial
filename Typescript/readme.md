================================================
FILE: Typescript/Classes.ts
================================================
import type { User, Login } from "./Interface";

interface Address {
  street: string;
  city: string;
  zipCode: string;
}

// Why to use Classes?
// Classes are a blueprint for creating objects with predefined properties and methods.
// They help in organizing code, promoting reusability, and encapsulating data and behavior together.

class Employee implements Login {
  // # is used to declare private fields in TypeScript
  // Private fields cannot be accessed or modified outside the class
  // We can use private keyword as well to declare private fields
  #empCode: number;
  empName: string;
  protected empAddress: Address; // Optional propert

  Login(): User {
    return {
      name: this.empName,
      age: 0,
      id: this.#empCode,
    };
  }

  // Constructor to initialize employee properties
  // Multiple constructors are not allowed in TypeScript
  constructor(code: number, name: string, empAddress: Address) {
    this.#empCode = code;
    this.empName = name;
    this.empAddress = empAddress;
  }
  display(): void {
    console.log(
      `Employee Code: ${this.#empCode}, Employee Name: ${
        this.empName
      }, Employee Address: ${this.empAddress.street}, ${
        this.empAddress.city
      }, ${this.empAddress.zipCode}`
    );
  }
  getNamewithAddress(): string {
    return `${this.empName} from ${this.empAddress.street}, ${this.empAddress.city}, ${this.empAddress.zipCode}`;
  }
  getEmpCode(): number {
    return this.#empCode;
  }
  setEmpCode(code: number): void {
    this.#empCode = code;
  }

  static getEmployeeCount(): number {
    return 50; // Example static method
  }
}

// Static members belong to the class itself rather than to any specific instance
// They can be accessed without creating an instance of the class
console.log(`Total Employees: ${Employee.getEmployeeCount()}`);
// Creating instances of the Employee class
// What is instance?
// An instance is a concrete occurrence of any object, existing usually during the runtime of a computer program.
// When a class is defined, no memory is allocated until an instance of the class is created.
// An instance is created using the 'new' keyword followed by the class constructor
let emp1 = new Employee(101, "Alice", {
  street: "123 Main St",
  city: "Wonderland",
  zipCode: "12345",
});
emp1.display();
console.log(`Employee Login Info:`, emp1.Login());

let emp2 = new Employee(102, "Bob", {
  street: "456 Elm St",
  city: "Nowhere",
  zipCode: "67890",
});
emp2.display();

console.log(emp1.getNamewithAddress());

emp1.setEmpCode(201);
console.log(`Updated Employee Code: ${emp1.getEmpCode()}`);

class Manager extends Employee {
  department: string;
  constructor(
    code: number,
    name: string,
    empAddress: Address,
    department: string
  ) {
    super(code, name, empAddress);
    this.department = department;
  }
  display(): void {
    super.display();
    console.log(`Department: ${this.department}`);
  }
}

let mgr1 = new Manager(
  201,
  "Charlie",
  { street: "789 Oak St", city: "Somewhere", zipCode: "11223" },
  "Sales"
);
mgr1.display();
console.log(mgr1.getNamewithAddress());



================================================
FILE: Typescript/datatypes.ts
================================================
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


================================================
FILE: Typescript/Interface.ts
================================================
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




================================================
FILE: Typescript/package.json
================================================
{
  "name": "typescript",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "typescript": "^5.9.3"
  }
}



================================================
FILE: Typescript/tsconfig.json
================================================
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    // "rootDir": "./src",
    "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "nodenext",
    "target": "esnext",
    "types": [],
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
    "experimentalDecorators": true
  }
}



================================================
FILE: Typescript/.github/copilot-instructions.md
================================================
# AI Coding Assistant Instructions for this repo

Purpose: Help AI code agents be immediately productive in this small TypeScript tutorial repository.

Quick summary
- This is a minimal TypeScript workspace containing example source files at the repository root. The primary example is `datatypes.ts` which demonstrates basic TypeScript types and runtime logging.
- Build is TypeScript-only (no bundler). `package.json` includes `typescript` as a dependency and `tsconfig.json` drives compilation.

Project layout (important files)
- `datatypes.ts` — canonical example and main source to modify.
- `datatypes.js`, `datatypes.d.ts` — generated/compiled artifacts.
- `package.json` — contains `typescript` dependency and placeholder `test` script.
- `tsconfig.json` — compiler options; note `module: "nodenext"`, `target: "esnext"`, `declaration: true`, and `strict: true`.

What an AI should know before editing
- Files live at repository root (not in `src/`); `tsconfig.json` currently does not set `outDir` or `rootDir`, so `npx tsc` will emit JS and declaration files next to the TS source.
- Keep the existing TypeScript settings (strict mode, declaration output) unless a clear repo-wide reason exists to change them.
- This repo is a learning/demo project — changes should be minimal, explanatory, and avoid introducing heavy toolchains without updating `package.json` and docs.

Common tasks & exact commands
- Compile TypeScript: `npx tsc` (uses local dependency). This will generate `.js`, `.map`, and `.d.ts` files next to `.ts` files.
- Run compiled example: `node datatypes.js` (after compile).
- Add Node type definitions if needed for runtime-only code: `npm install --save-dev @types/node` and consider adding `"types": ["node"]` to `tsconfig.json`.

Coding conventions & patterns discovered
- Example code uses top-level examples and `console.log` for output — follow the same minimal, illustrative style for new examples.
- Prefer explicit typing (the repo shows `let age: number`, `let empList: string[]`) — new code should embrace `strict` typing rather than rely on `any`.
- Do not introduce a `src/` layout or change compiler layout without also updating `tsconfig.json` and documenting the change in this file.

When adding features or tests
- If you add build/test tooling, update `package.json` scripts (e.g., add `build`, `start`, `test`) and document the commands here.
- There are no tests currently. If you introduce tests, prefer TypeScript-native test runners (e.g., `vitest` or `jest` with `ts-jest`) and add step-by-step install + run commands in this file.

Integration points & external dependencies
- Only external dependency: `typescript` (see `package.json`). There are no network services or other integrations.

Patch & PR guidance for AI agents
- Keep changes narrowly scoped and self-contained. Each PR should:
  - Explain why `tsconfig.json` changes are needed (if any).
  - Include exact commands to reproduce build and run locally.
  - Avoid generating large unrelated refactors (e.g., converting layout to monorepo) in a single PR.

Examples (copyable)
- Compile and run:
```
npx tsc
node datatypes.js
```
- Install Node types (if you need node globals at compile time):
```
npm install --save-dev @types/node
```

If you find existing `.github/copilot-instructions.md` content when merging
- Merge preserving useful guidance, keep the repo-specific commands above, and remove generic or irrelevant suggestions.

Questions / follow-up
- If you'd like, I can add example `package.json` scripts (`build`, `start`) and a brief `README.md` showing these commands. Ask me to proceed.


