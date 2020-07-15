// Simple Var declaration
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// Arrays
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];

// orrrrrrrr

// let strArr: Array<string>;
// let numArr: Array<number>;
// let boolArr: Array<boolean>;

// Tuples 
let strNumTuples: [string, number];

myString = 'Hello World' + 'MoreStuff'
myNum = 22;
myBool = true;
myVar = true;


strArr = ['hello', 'boi', 'something'];
numArr = [1, 2, 3, 4, 5];
boolArr = [true, false, true];

strNumTuples = ['hello', 4];

// misc null types
let myVoid: void = null;
let myNull: null = undefined;
let myUndefined: undefined = undefined;

console.log(myVoid);
console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(myVar);
