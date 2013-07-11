/*jslint browser:true */

/* This program is designed to help Dungeon Masters perform 
quick calculations during adventures.

Each function rolls a specified number of dice and provides a number of
outputs based on those rolls.

Outputs:
    Sum
    Total Multiplied
    Dice Array
    Highest & Lowest Dice

This first function provide the random number generation for each type
of dice */

function dice_value(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* These variables are obtained from the HTML form, except for A. 
Which is all the output statements which will be parsed to a text box */
var A = "You rolled dice!";
var d100n = document.diceForm.d100.value;
var twen = document.diceForm.d20.value;
var d12n = document.diceForm.d12.value;
var d10n = document.diceForm.d10.value;
var d8n = document.diceForm.d8.value;
var d6n = document.diceForm.d6.value;
var d4n = document.diceForm.d4.value;
var numCust = document.diceForm.numCust.value;
var sidesCust = document.diceForm.sidesCust.value;

//What follows are the functions for each dice.
function d20(twen) {
    A = A + ("<p>You rolled " + twen + " D20's.</p>");
    
    // Variables 
    var sum = 0;
    var dice = new array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    // Sum, Multi & Dice Array
    while (twen > 0) { 
        sum = sum + (dice_value(1, 20) * twen);
        dice.push(dice_value(1, 20));
        multi = multi * (dice_value(1, 20));
        twen--;
    }

    // Highest Dice
    var firstDice = 0;
    var secondDice = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] > firstDice) {
            secondDice = firstDice;
            firstDice = dice[i];
            high = firstDice;
        }
    }
    
    // Lowest Dice
    var firstLow = 21;
    var secondLow = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] < firstLow) {
            secondLow = firstLow;
            firstLow = dice[i];
            low = firstLow;
        }
    }
    
    // Add all values to output variable
    A = A + ("<p>The total value of all dice was " + + sum + "</p>");
    A = A + ("<p>Each dice rolled the following numbers: " + dice + "</p>");
    A = A + ("<p>The highest dice was " + high + "</p>");
    A = A + ("<p>The lowest dice was " + low + "</p>");
    A = A + ("<p>The value of all dice multiplied together was " + multi + "</p>");
}

function d100(hund) {
    A = A + ("<p>You rolled " + hund + " D100's.</p>");
    
    var sum = 0;
    var dice = new array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    while (hund > 0) { 
        sum = sum + (dice_value(1, 100) * hund);
        dice.push(dice_value(1, 100));
        multi = multi * (dice_value(1, 100));
        d100n--;
    }

    var firstDice = 0;
    var secondDice = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] > firstDice) {
            secondDice = firstDice;
            firstDice = dice[i];
            high = firstDice;
        }
    }
    
    var firstLow = 101;
    var secondLow = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] < firstLow) {
            secondLow = firstLow;
            firstLow = dice[i];
            low = firstLow;
        }
    }
    
    A = A + ("<p>The total value of all dice was " + + sum + "</p>");
    A = A + ("<p>Each dice rolled the following numbers: " + dice + "</p>");
    A = A + ("<p>The highest dice was " + high + "</p>");
    A = A + ("<p>The lowest dice was " + low + "</p>");
    A = A + ("<p>The value of all dice multiplied together was " + multi + "</p>");
}
function d12(d12n) {
    A = A + ("<p>You rolled " + d12n + " D12's.</p>");
    
    var sum = 0;
    var dice = new array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    while (d12n > 0) { 
        sum = sum + (dice_value(1, 12) * d12n);
        dice.push(dice_value(1, 12));
        multi = multi * (dice_value(1, 12));
        d12n--;
    }

    var firstDice = 0;
    var secondDice = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] > firstDice) {
            secondDice = firstDice;
            firstDice = dice[i];
            high = firstDice;
        }
    }
    
    var firstLow = 13;
    var secondLow = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] < firstLow) {
            secondLow = firstLow;
            firstLow = dice[i];
            low = firstLow;
        }
    }
    
    A = A + ("<p>The total value of all dice was " + + sum + "</p>");
    A = A + ("<p>Each dice rolled the following numbers: " + dice + "</p>");
    A = A + ("<p>The highest dice was " + high + "</p>");
    A = A + ("<p>The lowest dice was " + low + "</p>");
    A = A + ("<p>The value of all dice multiplied together was " + multi + "</p>");
}
function d10(d10n) {
    A = A + ("<p>You rolled " + d10n + " D10's.</p>");
    
    var sum = 0;
    var dice = new array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    while (d10n > 0) { 
        sum = sum + (dice_value(1, 10) * d10n);
        dice.push(dice_value(1, 10));
        multi = multi * (dice_value(1, 10));
        d10n--;
    }

    var firstDice = 0;
    var secondDice = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] > firstDice) {
            secondDice = firstDice;
            firstDice = dice[i];
            high = firstDice;
        }
    }
    
    var firstLow = 11;
    var secondLow = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] < firstLow) {
            secondLow = firstLow;
            firstLow = dice[i];
            low = firstLow;
        }
    }
    
    A = A + ("<p>The total value of all dice was " + + sum + "</p>");
    A = A + ("<p>Each dice rolled the following numbers: " + dice + "</p>");
    A = A + ("<p>The highest dice was " + high + "</p>");
    A = A + ("<p>The lowest dice was " + low + "</p>");
    A = A + ("<p>The value of all dice multiplied together was " + multi + "</p>");
}
function d8(d8n) {
    A = A + ("<p>You rolled " + d8n + " D8's.</p>");
    
    var sum = 0;
    var dice = new array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    while (d8n > 0) { 
        sum = sum + (dice_value(1, 8) * d8n);
        dice.push(dice_value(1, 8));
        multi = multi * (dice_value(1, 8));
        d8n--;
    }

    var firstDice = 0;
    var secondDice = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] > firstDice) {
            secondDice = firstDice;
            firstDice = dice[i];
            high = firstDice;
        }
    }
    
    var firstLow = 9;
    var secondLow = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] < firstLow) {
            secondLow = firstLow;
            firstLow = dice[i];
            low = firstLow;
        }
    }
    
    A = A + ("<p>The total value of all dice was " + + sum + "</p>");
    A = A + ("<p>Each dice rolled the following numbers: " + dice + "</p>");
    A = A + ("<p>The highest dice was " + high + "</p>");
    A = A + ("<p>The lowest dice was " + low + "</p>");
    A = A + ("<p>The value of all dice multiplied together was " + multi + "</p>");
}
function d6(d6n) {
    A = A + ("<p>You rolled " + d6n + " D6's.</p>");
    
    var sum = 0;
    var dice = new array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    while (d6n > 0) { 
        sum = sum + (dice_value(1, 6) * d6n);
        dice.push(dice_value(1, 6));
        multi = multi * (dice_value(1, 6));
        d6n--;
    }

    var firstDice = 0;
    var secondDice = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] > firstDice) {
            secondDice = firstDice;
            firstDice = dice[i];
            high = firstDice;
        }
    }
    
    var firstLow = 7;
    var secondLow = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] < firstLow) {
            secondLow = firstLow;
            firstLow = dice[i];
            low = firstLow;
        }
    }
    
    A = A + ("<p>The total value of all dice was " + + sum + "</p>");
    A = A + ("<p>Each dice rolled the following numbers: " + dice + "</p>");
    A = A + ("<p>The highest dice was " + high + "</p>");
    A = A + ("<p>The lowest dice was " + low + "</p>");
    A = A + ("<p>The value of all dice multiplied together was " + multi + "</p>");
}
function d4(d4n) {
    A = A + ("<p>You rolled " + n + " D4's.</p>");
    
    var sum = 0;
    var dice = new array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    while (d4n > 0) { 
        sum = sum + (dice_value(1, 4) * d4n);
        dice.push(dice_value(1, 4));
        multi = multi * (dice_value(1, 4));
        d4n--;
    }

    var firstDice = 0;
    var secondDice = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] > firstDice) {
            secondDice = firstDice;
            firstDice = dice[i];
            high = firstDice;
        }
    }
    
    var firstLow = 5;
    var secondLow = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] < firstLow) {
            secondLow = firstLow;
            firstLow = dice[i];
            low = firstLow;
        }
    }
    
    A = A + ("<p>The total value of all dice was " + + sum + "</p>");
    A = A + ("<p>Each dice rolled the following numbers: " + dice + "</p>");
    A = A + ("<p>The highest dice was " + high + "</p>");
    A = A + ("<p>The lowest dice was " + low + "</p>");
    A = A + ("<p>The value of all dice multiplied together was " + multi + "</p>");
}
function customDice(numCust, sidesCust) {

// This function rolls a number of dice with a specified number of sides
    A = A + ("<p>You rolled " + numCust + " D" + sides + "'s</p>");
    
    var sum = 0;
    var dice = new array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    while (numCust > 0) { 
        sum = sum + (dice_value(1, sidesCust) * numCust);
        dice.push(dice_value(1, sidesCust));
        multi = multi * (dice_value(1, sidesCust));
        numCust--;
    }

    var firstDice = 0;
    var secondDice = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] > firstDice) {
            secondDice = firstDice;
            firstDice = dice[i];
            high = firstDice;
        }
    }
    
    var firstLow = (sidesCust + 1);
    var secondLow = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] < firstLow) {
            secondLow = firstLow;
            firstLow = dice[i];
            low = firstLow;
        }
    }
    
    A = A + ("<p>The total value of all dice was " + sum + "</p>");
    A = A + ("<p>Each dice rolled the following numbers: " + dice + "</p>");
    A = A + ("<p>The highest dice was " + high + "</p>");
    A = A + ("<p>The lowest dice was " + low + "</p>");
    A = A + ("<p>The value of all dice multiplied together was " + multi + "</p>");
}

// This last function takes all the variables from the HTML form and passes them through to the individual dice functions.
function rollDice() {
  d100()
  d20();
  d12();
  d10();
  d8();
  d6()
  d4();
  customDice(numCust, sidesCust);
  document.diceForm.output.value = A;
}