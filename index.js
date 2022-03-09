// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Conversion of type number into string
let value = 2;
console.log(typeof value);    //number

value = String(value);    // to convert into type string 
console.log(typeof value);  //string

// Conversion of type Boolean into string
let isString = true;
console.log(typeof isString); // boolean

isString = String(isString);
console.log(typeof isString); //string
console.log(isString);  //'true'

let nullValue = null;
console.log(typeof nullValue);      //object
console.log(typeof String(nullValue));  // string
let undefinedValue = undefined;
console.log(typeof undefinedValue);   // undefined
console.log(typeof String(undefinedValue));   // string
