// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

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


// NUMBER CONVERSION

// Converstion of type string into number;
let name = "Daniel";
console.log("Type of name: "+ typeof name);   // string
console.log(Number(name));    //null;
console.log("Type of name: " + typeof Number(name));   // number  -->??

let num = "2";
console.log(typeof num);  // string
let num1 = Number(num);
console.log(typeof num1);  // number

let myNum = "23";
let myNum1 = +myNum;
console.log(typeof myNum1);  // number

console.log(num + myNum); // 223;
console.log(typeof (num + myNum));    //string  -->(string + string = string)

console.log(num - myNum); // -21;
console.log(typeof (num - myNum));    //number  -->(string - string = number)

console.log(num * myNum); 46;
console.log(typeof (num*myNum));  //number  -->(string * string = number)

console.log(num / myNum); // 0.08695652173913043    -->(string / string = number)
console.log(typeof (num/myNum));  //number

console.log(num % myNum); // 2    -->(string % string = number)
console.log(typeof (num % myNum));  //number

