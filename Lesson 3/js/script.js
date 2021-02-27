//For loops Ex 1
var i;
for (i = 9; i >= 0; i--) {
    console.log(i);
}

//Loops Ex 2 
for (i = 0; i <= 20; i++) {
    if (i % 2) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

//While loop
let j = 0;
while (j < 6) {
    console.log(j);
    j++;
}

//While loop ex 2
let k = 1;
let sum = 0;

while (k <= 20) {
    sum += k; //This addition has to be before the ++ if not calculation will be wrong as first sum will already add 2.
    k++;
}
console.log(sum);

//While loop ex 3
let l = 1;
while (l <= 20) {
    if (l % 2 === 0) {
        console.log(l);
    }
    l++;
}

//Do while loop. Do the above while the below condition exists.
var text = "";
var m = 0;

do {
    text += "The number is " + m + "\n"; // "\n" is same as <br/> in html just a break
    m++;
} while (m < 10);
console.log(text);


//Do while loop Ex
var n = 0;

do {
    console.log(n);
    n++; // n++ always should be right at the bottom of a condition if you want the condition above to be executed correctly.
} while (n <= 20);

// Functions to execute a line of codes upon calling the function "greet();"
function greet() {
    console.log("FS102");
}
greet(); //execute the code inside function greet()

// Function with variables
function greet2(time, name) {
    console.log(`Good ${time}, ${name}`);
}
greet2("Afternoon", "MK");

// Function EX
function average(x, y) {
    return (x + y) / 2;
}
average(10, -4);
average(2.5, 8);
console.log(average(2.5, 8)); // Can console log the whole function to get the return value to show

/*Function prompting for name input. Prompt is same as python input.
function myFunction() {
    var person = prompt("Please enter your name", "My Name");
    if (person != null) {
      console.log("Hello " + person + "! How are you today?");
    }
  }
  myFunction(); comment out due to annoyance*/

  //Functions EX 2
  function add(c, d) {
      console.log((c + d));
  }
  add(1, 9);

  /*Functions EX 3
  function addinput() {
      var n1 = prompt("Please enter number 1");
      var n2 = prompt("Please enter number 2");
      var added = (n1 + n2);
      if (added != null) {
          console.log("The sum of the 2 numbers is: " + added);
      }
  }
  addinput(); comment out due to prompt annoyance*/

/*Class Activity
function calculator() {
    var n1 = parseInt(prompt("Please enter number 1"));
    var operator = prompt("Please enter the operation method");
    var n2 = parseInt(prompt("Please enter number 2"));

    if (operator === "+") {
        var result = parseInt(n1 + n2);
    } else if (operator === "-") {
        var result = parseInt(n1 - n2);
    } else if (operator === "*") {
        var result = parseInt(n1 * n2);
    } else if (operator === "/") {
        var result = parseInt(n1 / n2);
    } else {
        var result = "Please enter a valid operator";
    }
    console.log(result); 
}
calculator(); commented due to annoying prompt*/

//Math
var math = Math.floor(Math.random() * 10); //random() creates a random int from 0 to 0.99. Therefore, if you want to generate to a certain max number using floor, including it, then need to add one to max number
console.log(math); //This will only generate random from 1-9. This is a more fair way to generate random numbers.

var math2 = Math.ceil(Math.random() * 10); // This can generate 1 - 10 as ceil is used but you will almost not find 0 or 1 as your answer. As such, probability chances are not equal.
console.log(math2);

