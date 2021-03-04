// Lesson 5
var person = {      // Object person (can out both int and string types in object, array cannot)
    firstname: "John",
    lastname: "Doe",
    age: 25,
    get fullName() {  // New Get method to retrieve object details
        return this.firstname + " " + this.lastname;
    },
    language: "",
    set lang(value) { // New Set method to set object details. Good for details that require input later.
        this.language = value;
    }
};

// Looping person object details for printout
let loop = 0;
var result ="";
for (loop in person) {
    result += person[loop] + " ";
}
console.log(result);

person.lang = "en"; // Setting lang value to object can prompt this if require input from user to log to object
console.log(person.language);  

console.log(myElement); // This variable is declared and gotten from index.html
