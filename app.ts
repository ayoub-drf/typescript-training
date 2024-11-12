// Primitive Types
// null
// number
// undefined
// boolean
// string
// any

// --------------------------------------------------

// Arrays
// let strArr: string[] = ['true', "james"];
// let numArr: boolean[][] = [[true, false], [true]];
// let tupleArr: [number, string] = [1, "x"]
// const coords: [number, number[]][] = [
//     [1, [3, 2]],
//     [-2, [93, 2]],
// ]

// --------------------------------------------------

// Enums & literals
// let x: "north" | "south" | "west" | "east";

// enum Size {
//     Small = 100,
//     Medium,
//     Large,
// }

// let size: Size = 101

// enum Direction {
//     Up = 'UP',
//     Down = 'DOWN',
// }

// let k: Size = 100


// Any & Unknown & Type Casts
// let x: any = 1
// x = ''

// let x: unknown = 3;

// if (typeof x === 'string') {
//     let xLength = x.length;
// } else if (typeof x === 'number') {
//     let result = x + 1;
// }

// const result = (x as number) + 1 // Type Casts == treat x as number

// const processFeedback = (input: any): void => {
//     console.log(`¨Processing ${input}`)
// }

// const processFeedback = (input: unknown): void => {
//     if (typeof input === 'string') {
//         console.log(`¨Processing Text ${input.toUpperCase()}`)
//     } else if (typeof input === 'number') {
//         console.log(`¨Processing Number ${input + 100}`)
//     } else {
//         console.log('Unsupported type of input')
//     }
// };

// --------------------------------------------------

// const arr = [[{name: "tim"},{name: "dex"}], undefined]

// Optional Chaining (?.) return undefined if the property is null or undefined
// const el = arr.pop()?.pop()?.name; // undefined (No runtime error)

// Bang | Non-null assertion (!.) is used to tell ts this value will never bull null or undefined
// const el = arr.pop()!.pop()!.name; // Throw and error if the value is actually null or undefined

// --------------------------------------------------

// Type Aliases for functions
// type AddFunction = (x: number, y: number) => number;
// const add: AddFunction = (a, b) => a + b;

// Higher Order Functions
// const add = (x: number): (y: number) => number => (y: number): number =>  x + y;
// const add = (a: number, b: number): number => a + b;
// const sub = (a: number, b: number): number =>  a - b;
// function a(func: ((x: number, y: number) => number)[], values: [number, number][]): number[] {
//     const results = [] as number[];
//     for (let i = 0; i < func.length; i++) {
//         let args = values[i];
//         let result = func[i](args[0], args[1])
//         results.push(result)
//     }
//     return results
// }

// function overloading 
// function sum(a: string, b: string): string;
// function sum(a: number, b: number): number;
// function sum(a: number | string, b: number | string): number | string;
// function sum(a: unknown, b: unknown): unknown {
//     if (typeof a === "string" && typeof b === "string") return a + b;
//     else if (typeof a === "number" && typeof b === "number") return a + b
//     else return "invalid"
// }

// --------------------------------------------------
// => Interfaces


// Object
// interface Person {
//     readonly name: string;
//     readonly age: number;
//     greeting(): string
// };
// const obj:Person = {name: "dexter", age: 33, greeting() {return "Hello " + this.name + " " + this.age}};


// Class
// class Employee implements Person {
//     name: string;
//     age: number;
//     constructor (name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     greeting(): string {
//         return "Hello " + this.name + " " + this.age 
//     }
// }

// Functions
// interface Greeting {
//     (name: string): void; // or 
// }


// interface Person {
//     name: string;
// }
// interface Employee {
//     id: number;
// }
// interface Manager extends Person, Employee {
//     employees: Person[]
// }

// --------------------------------------------------
// => Classes & Abstracts
// class Person {
//     // private name: string; // private, Means you can not access the name outside the class
//     // public name: string; // public, By default
//     protected name: string; // protected, same s private but you can I access from their subclasses (extends)
//     constructor (name: string) {
//         this.name = name;
//     }
//     getName (): string {return this.name}
//     private setName (name: string): string {
//         this.name = name
//         return name
//     }
// };

// Abstracts
// abstract class Animal {
//     abstract setV(num: number): void; // Abstract methods must be implemented by subclasses

//     move(): void {console.log('Moving ...')}
// };
// class Dog extends Animal {
//     setV(num: number): void {
//         console.log('Hello')
//     }
// };


// --------------------------------------------------
// => Static Methods & Attributes
// class Car {
//     static counter = 0; // Static Property or attribute can be accessed just from the class itself not from the instance
//     name: string;
//     constructor(name: string) {
//         this.name = name
//     }

//     static Walk() { // Static methods
//         this.counter--;
//         console.log("Walking ... ")
//     }
// };

// --------------------------------------------------
// => Generics

// Functions
// function identity<T>(arg: T): T {
//     return (arg);
// };
// let output1 = identity<number>(42); 

// Interfaces
// interface wiseLength {
//     length: number;
// };
// interface Box<T> {
//     value: T;
// }
// let numValue: Box<string> = {value: "Hello"};
// let arrValue: Box<number[]> = {value: [1, 2]};
// function logLength<T extends wiseLength>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// };

// Classes
// class GenericBox<T> {
//     constructor(public value: T) {}
// }

// Multiple Generic
// function pair<T, U>(x: T, y: U): [T, U] {
//     return [x, y];
// };

// Type Aliases & Default Type
// type Pair<T = string, U = string> = [T, U];
// let pair1: Pair<number, string> = [1, "One"];


//--------------------------------------------------
// Type Aliases
// type v = string;
// type obj = {x: number, y: number}
// type fun = (name: string) => string;
// type ID = string | number;

// type Employee = {
//     name: string;
// }
// type Contact = {
//     email: string;
//     phone: string;
// }
// type Status = 'yes' | 'no'
// type ReadOnlyType = {
//     readonly [K in keyof Contact]: Contact[K];
// }

// const isAvailable: Status = 'yes'

// type User = {id: number} & Employee & Contact;
// const employeeOne: User = {
//     id: 1,
//     name: "James",
//     email: "James@aol.com",
//     phone: "89389893",
// }

// let strV: v = "A";
// let myObj: obj = {x: 1, y: 2}
// const greet: fun = (name) => name;
// let userId: ID = 2;


//--------------------------------------------------
// Type Guards (in | typeof | instanceof)
// const printType = (input: number | string | string[] | boolean) => {
//     if (typeof input === "string") return input.length;
//     else if (typeof input === "boolean") return Number(input);
//     else if (Array.isArray(input)) return input[0];
// };
// class Dog {
//     name: string;
//     constructor(name: string) {
//         this.name = name
//     }
// }
// const dog = new Dog('jack')
// console.log('name' in Dog)
// console.log(dog instanceof Dog)

// type Dog = { kind: "dog"; bark: () => void };
// type Cat = { kind: "cat"; meow: () => void };
// const cat: Cat = { kind: "cat", meow: () => {console.log('GHello')}  }

// function isDog(animal: Dog | Cat): animal is Dog {
//     return animal.kind === "dog";
// }

// console.log(isDog(cat))


//--------------------------------------------------
// => Discriminated Unions
// interface Circle {
//     kind: 'circle';
//     radius: number;
// }
// interface Square {
//     kind: 'square';
//     sideLength: number;
// }
// type Shape = Square | Circle;

// const getArea = (shape: Shape): number => {
//     if (shape.kind === 'circle') {
//         return Math.PI * shape.radius * shape.radius;
//     }
//     return shape.sideLength * shape.sideLength;
// }
// const square: Shape = { kind: "square", sideLength: 5 };

//--------------------------------------------------
// => Discriminated Unions
/*
    # Partial === Partial<User> == for make object property optional
    # Readonly == Readonly<User> ==  for make the object for read only
    # Record == Record<number; User> = {id, {username: "value"}}== it help define how object been wrote 
*/

interface User {
    username: string;
}
const updatePartial = (user: User, updates: Partial<User>): User => {
    return {...user, ...updates}
};
const person: User = { username: "Alice"};
const newPerson: User = updatePartial(person, {username: "Dexter"})

