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
