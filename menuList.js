
// Pizza Cost Information
// Size to cost per topping
var pizzaCost = {
	"sizeSlice": [3.75, .40],
	"size12": [12, 1],
	"size14": [14.70, 1.35],
	"size16": [17.60, 1.75],
	"size18": [21.60, 2.25]
	
};

// Salad List
// 0 is ID name, 1 is Display name, 2 is side price, 3 is dinner price
var saladList = {
	"caesar": ["caesar","Caesar Salad", 4.75, 7.4],
	"chknCaesar": ["chknCaesar","Chicken Caesar Salad", 6, 9],
	"chinese": ["chinese","Chinese Salad", 6, 9],
	"chknChinese": ["chknChinese","Chicken Chinese Salad", 7, 10],
	"gardenSalad": ["gardenSalad","Garden Salad", 4.75, 7.4],
	"grkSalad": ["grkSalad","Greek Salad", 5.5, 8],
	"spinachSalad": ["spinachSalad","Spinach Salad", 5.5, 8]	
};

var pushSalads = function(saladList){
	for(salads in saladList){
		var saladID = saladList[salads][0];
		var saladName = saladList[salads][1];
		$("#salads").append('<div id="'+saladID+'">'+'<input type="checkbox" name="'+saladID+'Check" id="'+saladID+'"> <label for="'+saladID+'">'+saladName+'</label>'
		+'<input type="radio" name="'+saladID+'Size" class="side" value="side">' +
		'<label for="side">Side</label>' +
		'<input type="radio" name="'+saladID+'Size" class="dinner" value="dinner">' +
		'<label for="side">Dinner</label>');
	}
};

$(document).ready(function(){
	pushSalads(saladList);
});

// Pasta List
// 0 is ID name, 1 is display name, 2 is default price, 3 is modified price (adding meatballs or prawns, for example)
// When printing, maybe have an if statement that checks for hasOwnProperty "add" ?

var pastaList = {

"fettAlfredo": ["fettAlfredo","Fettuccine Alfredo", 12,[]],
"fettWith": ["fettWith","Fettuccine With Clams/Chicken/Pesto", 14, []  ],
"lasagna": ["lasagna","Lasagna",15,[]],
"ravioli": ["ravioli","Ravioli",13,[]],
"pestoRavioli": ["pestoRavioli","Ravioli With Pesto",13,[]],
"spaghetti": ["spaghetti","Spaghetti",12,["Add Meatballs",13]],
"meatballs": ["meatballs","Extra Meatballs/Side of Meatballs", 5,[]]
}

var pushPasta = function(pastaList){
	for(pastas in pastaList){
		var pastaID = pastaList[pastas][0];
		var pastaName = pastaList[pastas][1];
		$("#pastas").append('<div id="'+pastaID+'">'+'<input type="checkbox" name="'+pastaName+'" id="'+pastaID+'" value="'+pastaList[pastaID][2]+'"> <label for="'+pastaID+'">'+pastaName+'</label>');
		
		if(pastaList[pastas][3].length > 0){
			var addModifierName = pastaList[pastas][3][0];
			$('#pastas').append('<input type="checkbox" name="'+addModifierName+'" id="'+addModifierName+'" value="'+pastaList[pastaID][3][1]+'"> <label for="'+addModifierName+'"> ' +addModifierName+'</label>' + '</div>');
		
		} else {
			$('#pastas').append('</div');
		}
	}
}

$(document).ready(function(){
	pushPasta(pastaList);
});

// Sandwich List
// 0 is id name for appending, 1 is display name for inserting text
// 2 is regular price, 3 is price modifier (if exists)

var sandwichList = {
	"calzone": ["calzone", "Calzone", 13, 0.4],
	"grilledChkn": ["grilledChkn", "Grilled Chicken Sub", 8, 0.4],
	"meatballSub": ["meatballSub", "Meatball Sub", 8, 0],
	"pizzaSub": ["pizzaSub", "Pizza Sub", 7, 0.4],
	"veggieSub": ["veggieSub", "Vegetarian Sub", 7, 0],
}

var pushSandwiches = function(sandwichList){
	for(sandwiches in sandwichList){
		var sandwichID = sandwichList[sandwiches][0];
		var sandwichName = sandwichList[sandwiches][1];
		
		$('#sandwiches').append('<div id="'+sandwichID+'">'+'<input type="checkbox" name="'+sandwichName+'" id="'+sandwichID+'" value="'+sandwichList[sandwichID][2]+'"> <label for="'+sandwichID+'"> ' +sandwichName+'</label>');
		if(sandwichList[sandwiches][3] > 0){
			$("#sandwiches").append('<label for="sandwichToppingNumber"> Add Toppings</label>'+'<input type="number" id="'+sandwichID+'toppingNmbr" value="0" step="1" min="0" max="5">'+'</div>');
		} else {
			$("#sandwiches").append('</div>');
		}
	}
}

$(document).ready(function(){
	pushSandwiches(sandwichList);
});

// Appetizers
// 0 is ID, 1 is display name, 2 is price, 3 is modifier price if available.

var appetizerList = {
	"bruschetta": ["bruschetta", "Bruschetta", 4.75],
	"garlicBread": ["garlicBread", "Garlic Bread", 3.95],
	"cheesyGarlicBread": ["cheesyGarlicBread", "Garlic Bread with Cheese", 4.45, ["Add side of Marinara", .4]],
	"pestoGarlicBread": ["pestoGarlicBread", "Garlic Bread with Pesto", 5],
	"buffaloWings": ["buffaloWings", "Spicy Buffalo Wings", 9]
	
}

var pushAppetizers = function(appetizerList){
	for(appetizers in appetizerList){
		var appetizerID = appetizerList[appetizers][0];
		var appetizerName = appetizerList[appetizers][1];
		
		$('#appetizers').append('<div id="'+appetizerID+'">'+'<input type="checkbox" name="'+appetizerName+'" id="'+appetizerID+'" value="'+appetizerList[appetizerID][2]+'"> <label for="'+appetizerID+'"> ' +appetizerName+'</label>');
		if(appetizerList[appetizers][3]){
			var modifierTextApp = appetizerList[appetizers][3][0];
			$("#appetizers").append('<input type="checkbox" name="'+modifierTextApp+'">'+'</div>'+'<label for="'+modifierTextApp+'">'+ modifierTextApp +'</label>');
		} else {
			$("#appetizers").append('</div>');
		}
	}
	
}

$(document).ready(function(){
	pushAppetizers(appetizerList);
});

// Dessert list, 0 is ID, 1 is display name, 2 is price
var dessertList = {
	"cCake": ["cCake", "Carrot Cake", 3.5],
	"tiramisu": ["tiramisu", "Tiramisu", 3.5],
	"cheeseCake": ["cheeseCake", "Cheese Cake", 2.75]
}

var pushDesserts = function(dessertList) {
	for(cakes in dessertList){
		var dessertID = dessertList[cakes][0];
		var dessertName = dessertList[cakes][1];
		$("#desserts").append('<div id="'+dessertID+'">'+'<input type="checkbox" name="'+dessertID+'Check" id="'+dessertID+'" value="'+dessertList[dessertID][2]+'">'+'<label for="dessertCheck">'+dessertName+'</label>');
	}
}

$(document).ready(function(){
	pushDesserts(dessertList);
});

// Drinks, follows the same convention as desserts
var drinksList = {
	"cannedDrink": ["cannedDrink","Canned Soda", 1.35],
	"kerns": ["kerns", "Kerns", 1.8],
	"snappleGatorade": ["snappleGatorade","Snapple/Gatorade", 2.75],
	"juice": ["juice", "Juice", 2],
	"2L": ["2L","2L", 3.2],
	"domBeer": ["domBeer","Domestic Beer", 3],
	"impBeer": ["impBeer", "Imported Beer", 4],
	"wineGlass": ["wineGlass","Wine Glass", 5],
	"wineBottle": ["wineBottle","Wine Bottle", 16],
	"expresso": ["expresso","Expresso", 2],
	"cappu": ["cappu","Cappuccino", 2.5],
	"latte": ["latte","Latte", 3],
	"mocha": ["mocha","Mocha", 3.5],
	"americano": ["americano","Americano", 2],
	"cof": ["cof","Coffee", 2],
	"syrup": ["syrup","Syrup Shot", .25]
	
}

var pushDrinks = function(drinkList) {
	for(drinks in drinkList){
		var drinkID = drinksList[drinks][0];
		var drinkName = drinksList[drinks][1];
		$("#drinks").append('<div id="'+drinkID+'">'+'<label for="drinkQuantity">'+drinkName+' Quantity</label>'+'<input type="number" name="drinkQuantity" value="0" step="1" id="'+drinkID+'">');
	}
	$("#drinks").append('<input type="button" value="Add Drinks To Order">');
	
};

$(document).ready(function(){
	pushDrinks(drinksList);
});

// Current Order 
// Catch items here, and then when orders are completed, push to the queue
var currentOrderObj = {
	"number": 0,
	"type": " ",
	"price": 0
}
var currentOrderArray = [];

// Objects in Queue

function orderQueue(){
	this._oldestIndex = 1;
	this._newestIndex = 1;
	this._storage = {};
};

orderQueue.prototype.size = function(){
	return this._newestIndex - this._oldestIndex;
};

orderQueue.prototype.enqueue = function(data){
	this._storage[this._newestIndex] = data;
	this._newestIndex ++;
};

orderQueue.prototype.dequeue = function(){
	var oldestData = this._oldestIndex;
	var newestData = this._newestIndex;
	var deletedData;
	
	if(oldestData !== newestData){
		deletedData = this._storage[oldestData];
		delete this._storage[oldestData];
		this.oldestData++;
		return deletedData;
	}
}