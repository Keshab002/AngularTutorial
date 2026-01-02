# 📘 TypeScript Learning Playground

This repository is a **hands-on TypeScript learning workspace** created to understand core and advanced TypeScript concepts through small, focused, and executable examples.

The purpose of this repo is **learning by doing**, not building a production-ready application.

---

## 🚀 What This Repository Covers

- TypeScript basic and advanced data types
- Interfaces and interface inheritance
- Classes and object-oriented programming
- Access modifiers (`public`, `protected`, `private`, `#`)
- Constructors and encapsulation
- Static members
- Inheritance and method overriding
- Functions (normal, anonymous, arrow)
- `this` binding behavior
- Enums and tuples
- Generics
- Rest and spread operators
- Decorators
- TypeScript compiler configuration

---

## 📂 Project Structure

Typescript/
├── Classes.ts # Classes, inheritance, access modifiers
├── datatypes.ts # Core TypeScript data types & functions
├── Interface.ts # Interfaces, destructuring, decorators
├── package.json # Project dependencies
├── tsconfig.json # TypeScript compiler configuration
└── .github/


---

## 📄 File Details

### 📌 datatypes.ts
Demonstrates **TypeScript fundamentals** with runtime output.

Topics include:
- `string`, `number`, `boolean`
- Arrays and array methods
- Enums
- Tuples
- `any` type and its drawbacks
- Function declarations
- Arrow functions and `this` binding
- Rest and spread operators
- Generic functions

---

### 📌 Interface.ts
Focuses on **contracts and structure enforcement**.

Concepts covered:
- Interface definition
- Interface extension
- Optional properties
- Object and array destructuring
- Decorators
- Interface-based method implementation

---

### 📌 Classes.ts
Covers **object-oriented programming concepts** in TypeScript.

Includes:
- Class creation
- Private fields using `#`
- `protected` members
- Constructors
- Interface implementation
- Static methods
- Inheritance using `extends`
- Method overriding with `super`

---

## ⚙️ Getting Started

### 1️⃣ Install Dependencies
```bash
npm install
npx tsc
```

This will generate:
Compiled .js files
.d.ts declaration files
Source maps

---

##TypeScript Configuration Highlights

The project uses a modern and strict TypeScript setup:
strict: true
target: esnext
module: nodenext
experimentalDecorators: true
declaration: true
outDir: ./dist
This configuration reflects real-world TypeScript best practices.

---

