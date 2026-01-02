"use strict";
// Interfaces
// Why Interfaces?
// Interfaces define the structure of an object, specifying the properties and methods it should have.
// They help in enforcing contracts, promoting code consistency, and enabling polymorphism.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
let user1 = {
    name: "John Doe",
    age: 30,
    id: 1,
};
console.log(`User Name: ${user1.name}, Age: ${user1.age}, ID: ${user1.id}`);
let emp1 = {
    name: "Jane Smith",
    age: 28,
    id: 2,
    salary: 50000,
};
console.log(`Employee Name: ${emp1.name}, Salary: ${emp1.salary}`);
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
let numbers = [10, 20, 30, 40, 50, 300, 100, 20, 400, 500];
let [first, second, third, ...rest] = numbers;
console.log(`First: ${first}, Second: ${second}, Third: ${third}, Rest: ${rest}`);
let result = rest.filter((num) => num > 100);
console.log(`Filtered Rest (num > 100): ${result}`);
// Decorators
// Why Decorators?
// Decorators provide a way to add metadata or modify the behavior of classes and their members.
// They enable aspect-oriented programming, code reuse, and separation of concerns.
function Logger(target) {
    console.log(`Class Decorator called on: ${target.name}`);
}
let SampleClass = class SampleClass {
    name = "Keshab";
};
SampleClass = __decorate([
    Logger
], SampleClass);
//# sourceMappingURL=Interface.js.map