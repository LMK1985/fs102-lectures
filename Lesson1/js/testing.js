console.log("abc");
console.log("The answer is:" + 42);

// Alert pop up on browser, do not use for assignements
//alert("alert pops up a dialog box. this is not recommended and allowed for assignments!");

// var is for a more permanent storage of data throughout the js file
var x = 5;
var y = 6;
var z = x + y;
console.log(z);
console.log("X plus 5 is: " + (x + 5));

// let is for a temporary storage of data that clears after a object {}. Anything outside of the object {} the let value is not saved.

{
    let x = 2;
    console.log("x in this object is " + x);
}

console.log("x outside of this object is once again " + x + ". the var x value declared on top. var takes precedence outside of the object {}");

var marks = 88; // Number
var shootingaccuracy = 0.60; // Number
var realname = "theone"; // String
var coordinates = [55,60,57.5]; // Array

// Variables String Methods

let nickname = "donkey Kong's";
let fname = nickname.substring(0, nickname.indexOf(" ")); // Get the first name. Start for char at 0 and end at space.
let lname = nickname.substring(nickname.indexOf(" ") + 1); // Get the last name. Start from space and + 1 removes the extra blank in front.
let len = nickname.length; // 12
let rname = 'monkeyman' // can use both single and double commas, but choose only one type througout
let firstletter = nickname[0]; //d is char at position 0
let fourthletter = nickname.charAt(3); // k is char at position 4
let lastletter = nickname.charAt(nickname.length-1); //s

console.log("Nickname - " + nickname);
console.log("Firstname - " + fname);
console.log("Lastname - " + lname);
console.log("Namelength - " + len);
console.log("Name - " + rname);
console.log("Firstletter - " + firstletter);
console.log("Fourthletter - " + fourthletter);
console.log("Lastletter - " + lastletter);

// Convert numbers and string

let count = 10; // 10 int
let stringedCount = "" + count; // "10" string
let puppyCount = count + " puppies, yay!"; // "10 puppies, yay!"
let magicNum = parseInt("42 is the answer"); //42 Grab the int in the string input
let mystery = parseFloat("Am I a number"); // NaN

console.log(count);
console.log(stringedCount);
console.log(puppyCount);
console.log(magicNum);
console.log(mystery);

// Ex 1

let jt = "Web Developer";
let loco = "Singapore";
let salary = 3500;

console.log("You will be a " + jt + " in " + loco + ", drawing $" + salary + " a month.")

// Ex 2

let by = 1990;
let fy = 2031;
let age = (fy - by);
let eage = (age - 1);

console.log("I will be either " + eage + " or " + age + " in 2031.")

// Ex 3

var cage = 36; // current age
var mage = 90; // future age
var bage = (mage - cage); // balance age
var yearamt = (365 * 5); // yearly projected savings
var totalamt = (bage * yearamt); // total savings for rest of life
var printresult = "I will have $" + totalamt + " in savings until the old age of " + mage + ".";

console.log(printresult);
