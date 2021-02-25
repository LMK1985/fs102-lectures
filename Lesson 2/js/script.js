let x = 5;
let y = 7;

console.log(x %= y);

let num1 = 10;

console.log(num1 ** 5);

let age = 1985;
let pro = "entreprenuer";
let fage = 2025;
let bage = (fage-age);

console.log("I will be " + bage +" years old in 2025, being an " + pro + ".");

//alertbox do not use in project submission
//alert("I will be " + bage +" years old in 2025, being an " + pro + ".")

// "", '' adding a \ will let console know the "" or ' is just a string. Adding a `` front and back of sentence also works, and tells the console inside is all string.
let quote = 'This is steve job\'s quote: "Quote1"';
let quote2 = `This is steve job's quote: "Quote1"`;
let quote3 = `This is steve job's quote: "Quote ${x}"`; //to add variables into a `` line, use ${}
console.log(quote);
console.log(quote2);
console.log(quote3);

//ifelse
let username = "user1";
let password = "pw123";

//If username and pwd match above value, do an alert to say login successful, else login fail. 
if(username == "user1" && password == "pw123") {
//    alert("Login was successful.");
} else {
//    alert("Login was unsuccessful.");
}

//change password function
let userkey = "johndoe297";
let passkey = "345";
let confirmpasskey = "345"

let userdb = "johndoe297";
let passdb = "password123";

if((userkey != userdb) || (passkey == passdb)) {
    console.log("Username is wrong or password is the same as your old password. Try again.");
} else {
    if(passkey === confirmpasskey) {
        console.log("Change password success");
    } else {
        console.log("Confirmed password do not match with new password.")
    }
}

//If a number is divisible by 2, 3 and/or 5 with no remainder
let num = "396";
let checkD2 =num%2;
let checkD3 =num%3;
let checkD4 =num%5;

if(checkD2 == 0) {
    console.log("Number is divisible by 2")
}
if(checkD3 == 0) {
    console.log("Number is divisible by 3")
}
if(checkD4 == 0) {
    console.log("Number is divisible by 5")
}