/*jslint browser:true */
function diceValue(min, max) {
    "use strict";
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var output = "You rolled dice!";
var i = 0;
var p = 0;
var dice = Object.create(null);
dice.sides = [0, 4, 6, 8, 10, 12, 20, 100];
dice.num = [1, 1, 1, 1, 1, 1, 1, 1];
dice.sum = 0;
dice.each = [];
dice.high = 0;
dice.low = (dice.sides[i] + 1);
dice.multi = 1;
dice.average = 0;

//Grabs values from HTML form
dice.num[0] = document.diceForm.numCust.value;
dice.num[1] = document.diceForm.d4.value;
dice.num[2] = document.diceForm.d6.value;
dice.num[3] = document.diceForm.d8.value;
dice.num[4] = document.diceForm.d10.value;
dice.num[5] = document.diceForm.d12.value;
dice.num[6] = document.diceForm.d20.value;
dice.num[7] = document.diceForm.d100.value;
dice.sides[1] = document.diceForm.sidesCust.value;

function rollDice() {
    "use strict";
    for (i = 0; i < dice.num.length; i++) {
        dice.sum = 0;
        dice.each = [];
        dice.high = 0;
        dice.low = (dice.sides[i] + 1);
        dice.multi = 1;
        output = output + ("<p>You rolled " + dice.num[i] + " D" + dice.sides[i] + "'s</p>");   
        
        while (dice.num[i] > 0) { 
            dice.sum = dice.sum + (diceValue(1, (dice.sides[i] + 1)));
            dice.each.push(diceValue(1, (dice.sides[i] + 1)));
            dice.multi = dice.multi * (diceValue(1, (dice.sides[i] + 1)));
            dice.num[i]--;
            dice.average = (dice.sum/dice.num.length);
            }

        for (p = 0; p < dice.each.length; p++) {
            if (dice.each[p] > dice.high) {
                dice.high = dice.each[p];
            }
            if (dice.each[p] < dice.low) {
                dice.low = dice.each[p];
            }
        }
/* Places output in proper output areas. Need to figure out the proper way to change the name to
the proper form sections.
	document.output.d(dice.sides[i])Sum.value = dice.sum;
	document.output.d(dice.sides[i])Array.value = dice.each;
	document.output.d(dice.sides[i])High.value = dice.high;
	document.output.d(dice.sides[i])Low.value = dice.low;
	document.output.d(dice.sides[i])Multi.value = dice.multi;
	document.output.d(dice.sides[i])Average.value = dice.average; */
    }
}

