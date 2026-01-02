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
