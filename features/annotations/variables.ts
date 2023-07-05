// in annotation we define the type of value that a variable will have

let apples: number = 5;
let speed: string = 'fast';
let haveName: boolean = false;
let nullValue: null = null;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'blue'];
let numArr: number[] = [1, 2, 3];

// classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: string } = {
    x: 10,
    y: "Your Name"
};

// functions
const logNumber: (currentNumber: number) => void = (currentNumber: number) => {
    console.log(currentNumber)
}

// when to use type-annotation
// case1: Function that returns the 'any' type

const json = '{"x":10,"y":"Your Name"}';
const parsedValue: { x: number; y: string } = JSON.parse(json);
console.log(parsedValue)

// case2: when we declare the variable on one line and initialize it later
let words:string[];
words=["red","blue"];

// case3: when we want a variable to have a type that can't be inferred
let numbers:number[] = [-10,-1,2];

let numberAboveZero: boolean | number = false;

for(let current of numbers){
    if(current > 0){
        numberAboveZero = current;
    }
}