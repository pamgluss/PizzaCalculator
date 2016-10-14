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
		
		// First check to see if anything has been selected
		if(currentData.length === 0){
			$("#otherfood-error").text("Please Make a Selection");
			
		} else {
			// Now we're going to iterate through everything in currentData
			for(var k = 0; k < currentData.length; k++ ){
				
			// Everything in other food should have a proper name
				var otherFoodName = currentData[k].name;
				
			// But the price depends on whether it's a salad or something else (yay, fun)
			// So for the time being we aren't sure what the price is:
				var otherFoodPrice;
			
			// Unless of course, the price is static, so we check for that
				if(parseInt(currentData[k].value)){
					otherFoodPrice = currentData[k].value;
					console.log(otherFoodPrice);
			
			// If it isn't, we look for the radio buttons that determine the size
				} else {
					var othFoodDiv = $("#"+otherFoodName);
					var othFoodRadioBtns = othFoodDiv.find("input[type='radio']");
					for(buttons in othFoodRadioBtns){
						if(othFoodRadioBtns[buttons].checked){
							var othFoodSize = othFoodRadioBtns[buttons].value;
							console.log(othFoodSize);
							
					// I'm not super proud of this code here, I need to make it scale-able
							if(othFoodSize === "side"){
								otherFoodPrice = saladList[otherFoodName][2];
								console.log(otherFoodPrice);
							} else if (othFoodSize === "dinner"){
								otherFoodPrice = saladList[otherFoodName][3];
								console.log(otherFoodPrice);
							}
							
					// Once you've found a checked radio button, end the loop
					// Note to self: Do I have a backup plan for if you forget to select a radio button? Fack
							break;
						}
					}
					
					if(othFoodSize === undefined){
						$("#otherfood-error").text("Salad can't be added without a size selection.");
					}
				} // End of if/else checking to see if elements have value or not
				
				// Now we should have the name and price of our food so:
				
				currentOrderObj.type = ;
				currentOrderObj.price = otherFoodPrice;
		
				currentOrderArray.push(currentOrderObj);

		
				$("#currentOrder").append("<div class='currOrdItem'>"+currentOrderObj.type + ": "+currentOrderObj.price.toFixed(2)+"</div>");
				
				
				
			};
			
			
		};
		
		
	} // // end of if statement checking for other food ID
	
	document.getElementById(formID).reset();
} // end of addToOrder function

