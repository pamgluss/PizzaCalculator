var addToOrder = function(formID){
	var currentData = [];
	currentData = $("#"+formID).serializeArray();
	console.log(currentData);
	
	if(formID === "pizza-input"){
		$("#pizzaError").text(""); // Clears any previous errors.
		
		// I want to check that size is selected.
		if(currentData[0].name === "pizzaSize"){
			
			for(var j = 0; j < currentData.length; j++){
				if(currentData[j].name === "pizzaSize"){
					var pizzaSize = currentData[j].value;
					var basePizzaPrice = pizzaCost[pizzaSize][0];
					var perToppingsPrice = pizzaCost[pizzaSize][1];
				} else if(currentData[j].name === "wholePizzaToppingNumber"){
					var wpToppingsNum = parseInt(currentData[j].value, 10);
				} else if (currentData[j].name === "firstHalfToppingNumber"){
					var fhToppingsNum = parseInt(currentData[j].value, 10);
				} else if (currentData[j].name === "secondHalfToppingNumber"){
					var shToppingsNum = parseInt(currentData[j].value, 10);
				}
			}
		
		} else {
			$("#pizzaError").text("Please Select A Size");
		} // end of if statement checking for size
		

		
		// fh = first half, sh = second half
		
		var finalPizzaCost;
		var totalToppings = (fhToppingsNum + shToppingsNum)/2;
		totalToppings = totalToppings + wpToppingsNum;
		finalPizzaCost = basePizzaPrice + (perToppingsPrice * totalToppings);
		

		// Update the currentOrderObj, then push to currentOrderArray
		currentOrderObj.type = "pizza";
		currentOrderObj.price = finalPizzaCost;
		
		currentOrderArray.push(currentOrderObj);

		
		$("#currentOrder").append("<div class='currOrdItem'>"+totalToppings + " topping " + currentOrderObj.type + ": "+currentOrderObj.price.toFixed(2)+"</div>");
		

	} // end of if statement checking for pizza ID
	
	
	// If statement that checks if button pressed is for "other food"
	if(formID === "otherFood-input"){
		$("#otherfood-error").text("");	// Clears previous error messages.
		
		
		if(currentData.length === 0){
			$("#otherfood-error").text("Please Make a Selection");
			
		} else {
			
			for(var k = 0; k < currentData.length; k++ ){
				var otherFoodName = currentData[k].name;
				var otherFoodPrice;
				
				if(parseInt(currentData[k].value)){
					otherFoodPrice = currentData[k].value;
					console.log(otherFoodPrice);
					
				} else {
					
					
				}
				
				
			};
			
			
		};
		
		
	} // // end of if statement checking for other food ID
	
	document.getElementById(formID).reset();
} // end of addToOrder function

