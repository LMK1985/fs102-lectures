function changetext() {
    var username = prompt("What's your name?");
    document.getElementById("text1").innerHTML = "Welcome " + username + " to our website";
    document.getElementById("text1").style.color = 'red'; // change color of text
}

function changecolor() {
    let checkcolor = document.getElementById("text2").style.backgroundColor;
    if (checkcolor == '') {
        document.getElementById("text2").style.backgroundColor = 'green';
        document.getElementById("text2").innerHTML = "Good to go!";
        document.getElementById("text2").style.color = 'white';
    } else if (checkcolor == 'green') {
        document.getElementById("text2").style.backgroundColor = 'yellow';
        document.getElementById("text2").innerHTML = "Slow down!";
        document.getElementById("text2").style.color = 'black';
    } else if (checkcolor == 'yellow') {
        document.getElementById("text2").style.backgroundColor = 'red';
        document.getElementById("text2").innerHTML = "Come to a stop!";
        document.getElementById("text2").style.color = 'white';
    } else if (checkcolor == 'red') {
        document.getElementById("text2").style.backgroundColor = 'green';
        document.getElementById("text2").innerHTML = "Good to go!";
        document.getElementById("text2").style.color = 'white';
    }
}

function changemode() {
    let modecheck = document.getElementById("wrapper").style.backgroundColor;
    if (modecheck == '') {
        document.getElementById("wrapper").style.backgroundColor = 'black';
        document.getElementById("wrapper").style.color = 'lightgrey';
        document.getElementById("text3").innerHTML = "Light Mode";
    } else if (modecheck == 'black') {
        document.getElementById("wrapper").style.backgroundColor = 'white';
        document.getElementById("wrapper").style.color = 'black';
        document.getElementById("text3").innerHTML = "Dark Mode";
    } else if (modecheck == 'white') {
        document.getElementById("wrapper").style.backgroundColor = 'black';
        document.getElementById("wrapper").style.color = 'lightgrey';
        document.getElementById("text3").innerHTML = "Light Mode";
    }
}

var user = {
    firstname: "John",
    lastname: "Doe",
    age: 25,
    fullname: () => this.firstname + " " + this.lastname
};
