// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

('use strict');

// STRING CONVERSION
// Conversion of type number into string
let value = 2;
console.log(typeof value); //number

value = String(value); // to convert into type string
console.log(typeof value); //string

// Conversion of type Boolean into string
let isString = true;
console.log(typeof isString); // boolean

isString = String(isString);
console.log(typeof isString); //string
console.log(isString); //'true'

// type of null
let nullValue = null;
console.log(typeof nullValue); //object
console.log(typeof String(nullValue)); // string

// type of undefined
let undefinedValue = undefined;
console.log(typeof undefinedValue); // undefined
console.log(typeof String(undefinedValue)); // string

// type of NaN
const notNumber = NaN;
console.log(typeof notNumber); // number
console.log('Not number: ' + typeof String(notNumber)); //string

// NUMBER CONVERSION

// Converstion of type string into number;
let name = 'Daniel';
console.log('Type of name: ' + typeof name); // string
console.log(Number(name)); //null;
// alert(Number(name)); //NaN;
console.log('Type of name: ' + typeof Number(name)); // number  -->??

// type of empty string;
const emptyString = '';
console.log('Empty string: ' + typeof emptyString); //string
console.log('Value of Empty string: ' + Number(emptyString)); //0

let num = '2';
console.log(typeof num); // string
let num1 = Number(num);
console.log(typeof num1); // number

let myNum = '23';
let myNum1 = +myNum;
console.log(typeof myNum1); // number

console.log(num + myNum); // 223;
console.log(typeof (num + myNum)); //string  -->(string + string = string)

console.log(num - myNum); // -21;
console.log(typeof (num - myNum)); //number  -->(string - string = number)

console.log(num * myNum);
46;
console.log(typeof (num * myNum)); //number  -->(string * string = number)

console.log(num / myNum); // 0.08695652173913043    -->(string / string = number)
console.log(typeof (num / myNum)); //number

console.log(num % myNum); // 2    -->(string % string = number)
console.log(typeof (num % myNum)); //number

const num2 = null;
console.log(Number(num2)); // 0
console.log(typeof Number(num2)); //number

const num3 = undefined;
// alert(Number(num3));   // NaN
console.log(Number(num3)); //null
console.log(typeof Number(num3)); //number

let age = Number('an arbitrary string instead of a number');
// alert(age);   // NaN
console.log(typeof age); //number

console.log(typeof 0); //number
// alert(typeof 0)    //number

const num4 = true;
console.log(typeof num4); //boolean
console.log(Number(num4)); //1
console.log(typeof Number(num4)); //number

const num5 = false;
console.log(Number(num5)); // 0

const num6 = NaN;
console.log(typeof num6); // number
console.log(Number(num6)); // null
console.log(typeof Number(num6)); //number

console.log('add: ' + Number(num5) + Number(num6));


//BOOLEAN CONVERSION

console.log(Boolean(1));    //true
console.log(Boolean(0));    //false

console.log(Boolean('Hello'));  //true
console.log(Boolean(""));   //false

console.log(Boolean(101));  //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined));  //false
console.log(Boolean(NaN));  //false
console.log(Boolean(true));   //true
console.log(Boolean(false))   //false
console.log(Boolean("0"));  //true


// https://javascript.info/operators
// Tasks

// The postfix and prefix forms
// What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;

let c = ++a;  
console.log(c)  // 2;
let d = b++;  
console.log(d)  // 1

// Assignment result
// What are the values of a and x after the code below?
let e = 2;

let x = 1 + (e *= 2);
console.log(x); // 5

// Type conversions
// What are results of these expressions?
console.log("" + 1 + 0);    // 10
console.log("" - 1 + 0); // -1
console.log(true + false);  // 1
console.log(6/"3"); // 2 
console.log("2" * "3");   //6
console.log(4+5+"px"); //9px
console.log("$" + 4 + 5);   //$45;
console.log("4" - 2);   // 2;
console.log("4px" - 2);   //null
console.log("-9" + 5);  //-95
console.log("-9" - 5);  //-14
console.log(null + 1);  //1
console.log(undefined + 1);   //null
console.log("\t \n" - 2);   //-2

// Fix the addition
// Here’s a code that asks the user for two numbers and shows their sum.

// It works incorrectly. The output in the example below is 12 (for default prompt values).

// Why? Fix it. The result should be 3.

// let m = prompt("First number?", 1);
// let n = prompt("Second number?", 2);
// console.log(m + n); // 12
// m = Number(m);
// n = +n;
// console.log(m + n); // 3

