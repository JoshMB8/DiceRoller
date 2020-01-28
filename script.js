/* Declare and assign variables for the Roll-Button and Advantage/ Disadvantage Checkbox.
* When the Rol lButton is clicked it will run the rollDice function.
* The Advantage/ Disadvantage Checkbox is set as disabled on loading of web-page.
* Two empty variables are also declared, one for the dice being selected and one for the quantity of dice to be rolled.
* These variables are not assigned values. */
var rollButton = document.getElementById("roll-button");
rollButton.addEventListener("click", rollDice);
var checkBoxAD = document.getElementById("adv/disadv");
checkBoxAD.disabled = true;
var dice;
var quantity;

/* Function that will assign values to dice and quantity, based on which radio button is selected.*/
function choose(choice) {
    dice = choice;
    quantity = "q-" + choice;
}

/* Function to enable the advantage/ disadvantage check box when the D20 radio button is selected.*/
function advDisOn() {
    checkBoxAD.disabled = false;
}

/* Function to disable the advantage/ disadvantage check box and make unchecked if already checked.*/
function advDisOff() {
    checkBoxAD.checked = false;
    checkBoxAD.disabled = true;
}

/* Function for removing the min value from an array. Used for stat rolling. If there is more than one number of the
* same value, which are considered the lowest only one will be removed.*/
function removeMin(arr){

    var low = (Math.min.apply(null, arr));

    arr.splice(arr.indexOf(low), 1);

    return arr;
}

/* Main function! Function that will "roll the dice", uses the JavaScript Math function to generate random numbers for
* the different dice options. Uses a series of if, else if statements for each dice type. For dice where the quantity
* being rolled is more than one an array is created and each random number is appended to the array. This also provides
* a sum total for the dice rolled. If no dice is selected the user will be prompted to select a dice to roll. Default
* quantity for all dice will be 1. D20 does not have a quantity option only the Advantage/ Disadvantage option.*/
function rollDice() {

    if (dice == 'd20' && checkBoxAD.checked){
        let roll1 = Math.floor(Math.random() * 20) + 1;
        let roll2 = Math.floor(Math.random() * 20) + 1;
        document.getElementById("roll").innerHTML = "You Rolled: " + roll1 + " & " + roll2;
    }

    else if (dice == 'd20'){
        let youRolled = Math.floor(Math.random() * 20) + 1;
        document.getElementById("roll").innerHTML = "You Rolled: " + youRolled;
    }

    else if (dice == 'd12'){
        var numDice = document.getElementById(quantity).value;
        var rolled = [];
        for (let i = 0; i < numDice; i++) {
            let youRolled = Math.floor(Math.random() * 12) + 1;
            rolled.push(youRolled)
        }
        if (rolled.length > 1) {
            const rolledSum = rolled => rolled.reduce((a,b) => a + b, 0);
            document.getElementById("roll").innerHTML = "You Rolled: " + rolled + " (" + rolledSum(rolled) + ")";
        }
        else {
            document.getElementById("roll").innerHTML = "You Rolled: " + rolled;
        }
    }

    else if (dice == 'd00'){
        var numDice = document.getElementById(quantity).value;
        var rolled = [];
        for (let i = 0; i < numDice; i++) {
            let youRolled = Math.floor(Math.random() * 100);
            rolled.push(youRolled)
        }
        if (rolled.length > 1) {
            const rolledSum = rolled => rolled.reduce((a,b) => a + b, 0);
            document.getElementById("roll").innerHTML = "You Rolled: " + rolled + " (" + rolledSum(rolled) + ")";
        }
        else {
            document.getElementById("roll").innerHTML = "You Rolled: " + rolled;
        }
    }

    else if (dice == 'd10'){
        var numDice = document.getElementById(quantity).value;
        var rolled = [];
        for (let i = 0; i < numDice; i++) {
            let youRolled = Math.floor(Math.random() * 10) + 1;
            rolled.push(youRolled)
        }
        if (rolled.length > 1) {
            const rolledSum = rolled => rolled.reduce((a,b) => a + b, 0);
            document.getElementById("roll").innerHTML = "You Rolled: " + rolled + " (" + rolledSum(rolled) + ")";
        }
        else {
            document.getElementById("roll").innerHTML = "You Rolled: " + rolled;
        }
    }

    else if (dice == 'd8'){
        var numDice = document.getElementById(quantity).value;
        var rolled = [];
        for (let i = 0; i < numDice; i++) {
            let youRolled = Math.floor(Math.random() * 8) + 1;
            rolled.push(youRolled)
        }
        if (rolled.length > 1) {
            const rolledSum = rolled => rolled.reduce((a,b) => a + b, 0);
            document.getElementById("roll").innerHTML = "You Rolled: " + rolled + " (" + rolledSum(rolled) + ")";
        }
        else {
            document.getElementById("roll").innerHTML = "You Rolled: " + rolled;
        }
    }

    else if (dice == 'd6'){
        var numDice = document.getElementById(quantity).value;
        var rolled = [];
        for (let i = 0; i < numDice; i++) {
            let youRolled = Math.floor(Math.random() * 6) + 1;
            rolled.push(youRolled)
        }
        if (rolled.length > 1) {
            const rolledSum = rolled => rolled.reduce((a,b) => a + b, 0);
            document.getElementById("roll").innerHTML = "You Rolled: " + rolled + " (" + rolledSum(rolled) + ")";
        }
        else {
            document.getElementById("roll").innerHTML = "You Rolled: " + rolled;
        }
    }

    else if (dice == 'd4'){
        var numDice = document.getElementById(quantity).value;
        var rolled = [];
        for (let i = 0; i < numDice; i++) {
            let youRolled = Math.floor(Math.random() * 4) + 1;
            rolled.push(youRolled)
        }
        if (rolled.length > 1) {
            const rolledSum = rolled => rolled.reduce((a,b) => a + b, 0);
            document.getElementById("roll").innerHTML = "You Rolled: " + rolled + " (" + rolledSum(rolled) + ")";
        }
        else {
            document.getElementById("roll").innerHTML = "You Rolled: " + rolled;
        }
    }

    else if (dice == 'stats'){
        var arr = [];
        let roll1 = Math.floor(Math.random() * 6) + 1;
        let roll2 = Math.floor(Math.random() * 6) + 1;
        let roll3 = Math.floor(Math.random() * 6) + 1;
        let roll4 = Math.floor(Math.random() * 6) + 1;
        arr.push(roll1, roll2, roll3, roll4);
        var stats = removeMin(arr);
        const statsSum = stats => stats.reduce((a,b) => a + b, 0);
        document.getElementById("roll").innerHTML = "You Rolled: " + stats + " (" + statsSum(stats) + ")";
    }

    else{
        document.getElementById("roll").innerHTML = "Please select dice.";
    }
}