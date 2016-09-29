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
		
		for(var j = 0; j < currentData.length; j++){
			if(currentData[j].name === "wholePizzaToppingNumber"){
				var wpToppingsNum = currentData[j].value;
			} else if (currentData[j].name === "firstHalfToppingNumber"){
				var fhToppingsNum = currentData[j].value;
			} else if (currentData[j].name === "secondHalfToppingNumber"){
				var shToppingsNum = currentData[j].value;
			}
		}
		
		
		console.log(wpToppingsNum);
		
		// fh = first half, sh = second half
		
		var finalPizzaCost;
		var totalToppings = ((fhToppingsNum + shToppingsNum)/2) + wpToppingsNum;
		finalPizzaCost = basePizzaPrice + (perToppingsPrice * totalToppings);
		
		console.log(finalPizzaCost);
		// Update the currentOrderObj, then push to currentOrderArray
		currentOrderObj.type = "pizza";
		currentOrderObj.price = finalPizzaCost;
		
		currentOrderArray.push(currentOrderObj);
		
		console.log(currentOrderObj);
		console.log(currentOrderArray);
		
		$("#currentOrder").append(totalToppings + " topping " + currentOrderObj.type + ": "+currentOrderObj.price);
		

	} // end of if statement checking for pizza ID
} // end of addToOrder function

