/*jslint browser:true */
function rollDice(sides, num_of_die) {
    "use strict";
    var values = new Array(num_of_die);
    
    for (var i = 0; i < num; i++) {
    	values[i] = Math.floor((Math.random() * sides) + 1);
    }
    
    return values;
}

random random = math.random;
	
var output = "You rolled dice!";
var dice = Object.create(null);
dice.sides = [0, 4, 6, 8, 10, 12, 20, 100];
dice.num = [0, 0, 0, 0, 0, 0, 0, 0];

/*
dice.sum = 0;
dice.each = [];
dice.high = 0;
dice.low = (dice.sides[i] + 1);
dice.multi = 1;
dice.average = 0;
*/

//Grabs values from HTML form
dice.num[0] = document.diceForm.elements["numCust"].value;
dice.num[1] = document.diceForm.elements["num4"].value;
dice.num[2] = document.diceForm.elements["num6"].value;
dice.num[3] = document.diceForm.elements["num8"].value;
dice.num[4] = document.diceForm.elements["num10"].value;
dice.num[5] = document.diceForm.elements["num12"].value;
dice.num[6] = document.diceForm.elements["num20"].value;
dice.num[7] = document.diceForm.elements["num100"].value;

dice.sides[0] = document.diceForm.elements["sidesCust"].value;

function makeTables() {
    "use strict";
    
    for (var i = 0; i < 8; i++) {
    	
    	if (dice.num[i] != 0) {
    		var diceValues = rollDice(dice.sides[i], dice.num[i]);
    		var aTable = document.createElement('table');
    		
    		for (var j = 0, tr, td; j < diceValues.length + 1; j++) {
	    		tr = document.createElement('tr');
	    		td = document.createElement('td');
	    		td.appendChild(document.createTextNode(diceValues[j]));
	    		tr.appendChild(td);
	    		aTable.appendChild(tr);
    		}
    		
    		document.getElementById('table').appendChild(aTable);
    	}
    }
    
    
/* I don't know what any of this does so I'm not going to
 * mess with it for now.
 */
/*    
    for (var i = 0; i < dice.num.length; i++) {
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

        for (var p = 0; p < dice.each.length; p++) {
            if (dice.each[p] > dice.high) {
                dice.high = dice.each[p];
            }
            if (dice.each[p] < dice.low) {
                dice.low = dice.each[p];
            };
        };
    };
*/
    
    
    
/* Places output in proper output areas. Need to figure out the proper way to change the name to
the proper form sections.
	document.output.d(dice.sides[i])Sum.value = dice.sum;
	document.output.d(dice.sides[i])Array.value = dice.each;
	document.output.d(dice.sides[i])High.value = dice.high;
	document.output.d(dice.sides[i])Low.value = dice.low;
	document.output.d(dice.sides[i])Multi.value = dice.multi;
	document.output.d(dice.sides[i])Average.value = dice.average; */
    
}

