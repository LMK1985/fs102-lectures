//Activity 1
function rolldice() {
    var num = parseInt(prompt("Please enter number of dices to roll"));
    var sum = 0;
    var i = 1;
    
    while(i <= num) {
        var roll = Math.floor(Math.random() * (7 - 1) + 1);
        sum = sum + roll;
        console.log("Dice " + i + ": " + roll);
        i++;
    }
    console.log("Your total dice value is: " + sum);
}