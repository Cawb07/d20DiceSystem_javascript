/* This program is designed to help Dungeon Masters perform 
quick calculations during adventures.

Each function rolls a specified number of dice and provides a number of
outputs based on those rolls.

Outputs:
    Sum
    Total Multiplied
    Dice Array
    Highest & Lowest Dice
*/

/* These first functions provide the random number generation for each type
of dice */

function dice_value(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function d20(n) {
    document.write("<p>You rolled " + n + " D20's.</p>");
    
    // Variables 
    var sum = 0;
    var dice = new Array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    // Sum, Multi & Dice Array
    while (n > 0) { 
        sum = sum + (dice_value(1, 20) * n);
        dice.push(dice_value(1,20));
        multi = multi * (dice_value(1,20));
        n--;
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
    
    // Print all values to console.
    document.write("<p>The total value of all dice was " + + sum + "</p>");
    document.write("<p>Each dice rolled the following numbers: " + dice + "</p>");
    document.write("<p>The highest dice was " + high + "</p>");
    document.write("<p>The lowest dice was " + low + "</p>");
    document.write("<p>The value of all dice multiplied together was " + multi + "</p>");
}

function d100(n) {
    document.write("<p>You rolled " + n + " D100's.</p>");
    
    var sum = 0;
    var dice = new Array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    while (n > 0) { 
        sum = sum + (dice_value(1, 100) * n);
        dice.push(dice_value(1,100));
        multi = multi * (dice_value(1,100));
        n--;
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
    
    document.write("<p>The total value of all dice was " + + sum + "</p>");
    document.write("<p>Each dice rolled the following numbers: " + dice + "</p>");
    document.write("<p>The highest dice was " + high + "</p>");
    document.write("<p>The lowest dice was " + low + "</p>");
    document.write("<p>The value of all dice multiplied together was " + multi + "</p>");
}
function d12(n) {
    document.write("<p>You rolled " + n + " D12's.</p>");
    
    var sum = 0;
    var dice = new Array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    while (n > 0) { 
        sum = sum + (dice_value(1, 12) * n);
        dice.push(dice_value(1,12));
        multi = multi * (dice_value(1,12));
        n--;
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
    
    document.write("<p>The total value of all dice was " + + sum + "</p>");
    document.write("<p>Each dice rolled the following numbers: " + dice + "</p>");
    document.write("<p>The highest dice was " + high + "</p>");
    document.write("<p>The lowest dice was " + low + "</p>");
    document.write("<p>The value of all dice multiplied together was " + multi + "</p>");
}
function d10(n) {
    document.write("<p>You rolled " + n + " D10's.</p>");
    
    var sum = 0;
    var dice = new Array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    while (n > 0) { 
        sum = sum + (dice_value(1, 10) * n);
        dice.push(dice_value(1,10));
        multi = multi * (dice_value(1,10));
        n--;
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
    
    document.write("<p>The total value of all dice was " + + sum + "</p>");
    document.write("<p>Each dice rolled the following numbers: " + dice + "</p>");
    document.write("<p>The highest dice was " + high + "</p>");
    document.write("<p>The lowest dice was " + low + "</p>");
    document.write("<p>The value of all dice multiplied together was " + multi + "</p>");
}
function d8(n) {
    document.write("<p>You rolled " + n + " D8's.</p>");
    
    var sum = 0;
    var dice = new Array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    while (n > 0) { 
        sum = sum + (dice_value(1, 8) * n);
        dice.push(dice_value(1,8));
        multi = multi * (dice_value(1,8));
        n--;
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
    
    document.write("<p>The total value of all dice was " + + sum + "</p>");
    document.write("<p>Each dice rolled the following numbers: " + dice + "</p>");
    document.write("<p>The highest dice was " + high + "</p>");
    document.write("<p>The lowest dice was " + low + "</p>");
    document.write("<p>The value of all dice multiplied together was " + multi + "</p>");
}
function d6(n) {
    document.write("<p>You rolled " + n + " D6's.</p>");
    
    var sum = 0;
    var dice = new Array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    while (n > 0) { 
        sum = sum + (dice_value(1, 6) * n);
        dice.push(dice_value(1,6));
        multi = multi * (dice_value(1,6));
        n--;
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
    
    document.write("<p>The total value of all dice was " + + sum + "</p>");
    document.write("<p>Each dice rolled the following numbers: " + dice + "</p>");
    document.write("<p>The highest dice was " + high + "</p>");
    document.write("<p>The lowest dice was " + low + "</p>");
    document.write("<p>The value of all dice multiplied together was " + multi + "</p>");
}
function d4(n) {
    document.write("<p>You rolled " + n + " D4's.</p>");
    
    var sum = 0;
    var dice = new Array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    while (n > 0) { 
        sum = sum + (dice_value(1, 4) * n);
        dice.push(dice_value(1,4));
        multi = multi * (dice_value(1,4));
        n--;
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
    
    document.write("<p>The total value of all dice was " + + sum + "</p>");
    document.write("<p>Each dice rolled the following numbers: " + dice + "</p>");
    document.write("<p>The highest dice was " + high + "</p>");
    document.write("<p>The lowest dice was " + low + "</p>");
    document.write("<p>The value of all dice multiplied together was " + multi + "</p>");
}
function customDice(n, sides) {
// This function rolls a number of dice with a specified number of sides
    document.write("<p>You rolled " + n + " D" + sides + "'s</p>");
    
    var sum = 0;
    var dice = new Array();
    var high = 0;
    var low = 0;
    var multi = 1;
    
    while (n > 0) { 
        sum = sum + (dice_value(1, sides) * n);
        dice.push(dice_value(1,sides));
        multi = multi * (dice_value(1,sides));
        n--;
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
    
    var firstLow = (sides + 1);
    var secondLow = 0;
    for (var i=0; i<dice.length;i++) {
        if (dice[i] < firstLow) {
            secondLow = firstLow;
            firstLow = dice[i];
            low = firstLow;
        }
    }
    
    document.write("<p>The total value of all dice was " + + sum + "</p>");
    document.write("<p>Each dice rolled the following numbers: " + dice + "</p>");
    document.write("<p>The highest dice was " + high + "</p>");
    document.write("<p>The lowest dice was " + low + "</p>");
    document.write("<p>The value of all dice multiplied together was " + multi + "</p>");
}
