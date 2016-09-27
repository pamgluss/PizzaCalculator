var addToOrder = function(formID){
		
		if(formID === "pizza-input"){
		var pizzaSizeRadio = document.getElementsByName('pizzaSize');
		for (var i = 0, length = pizzaSizeRadio.length; i < length; i++) {
			if (pizzaSizeRadio[i].checked) {
				// do whatever you want with the checked radio
				var pizzaSize = pizzaSizeRadio[i].value;
				console.log (pizzaSize);
				console.log(pizzaCost.pizzaSize);
				// only one radio can be logically checked, don't check the rest
				break;
			}
		}
		
		var currentData = [];
		currentData = $("#"+formID).serializeArray();
		console.log(currentData);
		
		

		} // end of if statement checking for pizza ID
} // end of addToOrder function

