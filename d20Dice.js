/*jslint browser:true */
function diceValue(min, max) {
//    "use strict";
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var i = 0;
var p = 0;
var formHasData = false;
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
dice.num[7] = document.forms[0].elements[0].value;
dice.num[6] = document.forms[0].elements[1].value;
dice.num[5] = document.forms[0].elements[2].value;
dice.num[4] = document.forms[0].elements[3].value;
dice.num[3] = document.forms[0].elements[4].value;
dice.num[2] = document.forms[0].elements[5].value;
dice.num[1] = document.forms[0].elements[6].value;
dice.num[0] = document.forms[0].elements[7].value;
dice.sides[0] = document.forms[0].elements[8].value;

function rollDice() {
//    "use strict";
    for (i = 0; i < dice.num.length; i++) {
        dice.sum = 0;
        dice.each.length = 0;
        dice.high = 0;
        dice.low = (dice.sides[i] + 1);
        dice.multi = 1;  
        dice.average = 0;
        
        while (dice.num[i] > 0) { 
            dice.sum = dice.sum + (diceValue(1, (dice.sides[i])));
            dice.each.push(diceValue(1, (dice.sides[i] + 1)));
            dice.multi = dice.multi * (diceValue(1, (dice.sides[i])));
            dice.num[i]--;
            }
      
        dice.average = (dice.sum/dice.each.length);

        for (p = 0; p < dice.each.length; p++) {
            if (dice.each[p] > dice.high) {
                dice.high = dice.each[p];
            }
            if (dice.each[p] < dice.low) {
                dice.low = dice.each[p];
            }
        }
// Places output in proper output areas.
      document.forms[2].elements[i].value = dice.sum;
      document.forms[3].elements[i].value = dice.each;
      document.forms[4].elements[i].value = dice.high;
      document.forms[5].elements[i].value = dice.low;
      document.forms[6].elements[i].value = dice.multi;
      document.forms[7].elements[i].value = dice.average;
    }
  formHasData = true;
  console.log(dice.num);
}

function clearForm() {
    if (formHasData) {
        for (i = 0; i < 7; i++) {
            document.forms[2].elements[i].value = "";
            document.forms[3].elements[i].value = "";
            document.forms[4].elements[i].value = "";
            document.forms[5].elements[i].value = "";
            document.forms[6].elements[i].value = "";
            document.forms[7].elements[i].value = "";
        }
    }
}

