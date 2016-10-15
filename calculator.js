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
			
			// Basically we don't want it to iterate over the salad size radio buttons, so we're skipping over them here
			// We can have this skip over the sandwich topping number values too
				if(otherFoodName.includes("Size" || "ToppingNmbr")){
					
				} else {
			// But the price depends on whether it's a salad or something else (yay, fun)
			// So for the time being we aren't sure what the price is:
				var otherFoodPrice;
			
			// Unless of course, the price is static, so we check for that
				if(parseInt(currentData[k].value)){
					otherFoodPrice = parseInt(currentData[k].value);
					currentOrderObj.type = otherFoodName;
					
			// Sandwiches have topping #s (because this couldn't be simple)
			// So we need to look for whether or not it HAS the option
			// Whether the option has been selected
			// And then adding the topping surcharge to the price. Yeah. 
			
			// If it isn't, we look for the radio buttons that determine the size
				} else {
					var othFoodDiv = $("#"+otherFoodName);
					var othFoodRadioBtns = othFoodDiv.find("input[type='radio']");
					for(buttons in othFoodRadioBtns){
						if(othFoodRadioBtns[buttons].checked){
							// This value vvv is going to be side or dinner, so don't freakout and parseInt later
							var othFoodSize = othFoodRadioBtns[buttons].value;

							
					// I'm not super proud of this code here, I need to make it scale-able
					// It just checks if the size is either dinner/side. 
							if(othFoodSize === "side"){
								otherFoodPrice = saladList[otherFoodName][2];
								currentOrderObj.type = "Side "+saladList[otherFoodName][1];

							} else if (othFoodSize === "dinner"){
								otherFoodPrice = saladList[otherFoodName][3];
								currentOrderObj.type = "Dinner "+saladList[otherFoodName][1];

							}
							
					// Once you've found a checked radio button, end the loop
							break;
						}
					}
					
					if(othFoodSize === undefined){
						$("#otherfood-error").text("Salad can't be added without a size selection.");
					}
					
				} // End of if/else checking to see if elements have value or not
				
				// Now we should have the name and price of our food so:
				
				
				currentOrderObj.price = otherFoodPrice;
		
				currentOrderArray.push(currentOrderObj);

		
				$("#currentOrder").append("<div class='currOrdItem'>"+currentOrderObj.type+": "+currentOrderObj.price.toFixed(2)+"</div>");
				
			}
				
			};
			
			
		};
		
		
	} // // end of if statement checking for other food ID
	
	document.getElementById(formID).reset();
} // end of addToOrder function

