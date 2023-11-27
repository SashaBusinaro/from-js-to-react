// Main primitives
let x: boolean = true;
let y: number = 1276;
let z: string = "Hello!";

/*
there are two main ways TypeScript assigns a type:
- Explicit
- Implicit
*/

// Special types

//any is a type that disables type checking and effectively allows all types to be used.
let a: any = "Dog";
a = 23;

const names: readonly string[] = ["Bob", "Donald"];
// names.push("Hello")

// A tuple is a typed array with a pre-defined length and types for each index.
// useState returns a tuple of the value and a setter function
// const [firstName, setFirstName] = useState('Dylan')

const graph: [x: number, y: number] = [33, 43.4];

// Casting with as
let s: unknown = "hello";
console.log((s as string).length);
