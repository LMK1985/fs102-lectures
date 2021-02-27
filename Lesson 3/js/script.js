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
    console.log("Hello there");
}
greet(); //execute the code inside function greet()

// Function with variables
function greet2(time, name) {
    var time = "Morning";
    var name = "MK";
    console.log(`Good ${time}, ${name}`);
}
greet2();