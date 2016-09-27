var addToOrder = function(formID){
		
	if(formID === "pizza-input"){
		var pizzaSizeRadio = document.getElementsByName('pizzaSize');
		for (var i = 0, length = pizzaSizeRadio.length; i < length; i++) {
			if (pizzaSizeRadio[i].checked) {
				// do whatever you want with the checked radio
				var pizzaSize = pizzaSizeRadio[i].value;
				var basePizzaPrice = pizzaCost[pizzaSize][0];
				var perToppingsPrice = pizzaCost[pizzaSize][1];
				// only one radio can be logically checked, don't check the rest
				break;
			}
		}
		
		var currentData = [];
		currentData = $("#"+formID).serializeArray();
		console.log(currentData);
		
		var wpToppingsNum = currentData[0].value;
		console.log(wpToppingsNum);
		
		// fh = first half, sh = second half
		var fhToppingsNum = currentData[1].value;
		var shToppingsNum = currentData[2].value;
		console.log(fhToppingsNum + " " + shToppingsNum);
		
		var finalPizzaCost;
		finalPizzaCost = basePizzaPrice + (perToppingsPrice * wpToppingsNum) + (((fhToppingsNum + shToppingsNum)/2)*perToppingsPrice);
		
		console.log(finalPizzaCost);

	} // end of if statement checking for pizza ID
} // end of addToOrder function

