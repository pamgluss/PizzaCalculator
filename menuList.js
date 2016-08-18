// ToppingsList
// 0 = Name
// 1 = Slice, sandwich, calzone
// 2 = 12, 3 = 14, 4 = 16, 5 = 18

var toppingsList = {
"Anchovies": ["Anchovies", .8, 2, 2.7, 3.5, 4.5],
"Artichoke Hearts" : ["Artichoke Hearts", 1, 1.35, 1.75, 2.25],
"Bacon": ["Bacon", 1, 1.35, 1.75, 2.25],
"Basil" : ["Basil", .8, 2, 2.7, 3.5, 4.5],
"Bell Peppers" : ["Bell Peppers", 1, 1.35, 1.75, 2.25], 
"Black Olives" : ["Black Olives", 1, 1.35, 1.75, 2.25], 
"Broccoli" : ["Broccoli", 1, 1.35, 1.75, 2.25], 
"Capers" : ["Capers", 1, 1.35, 1.75, 2.25],
"Caramelized Onion" : ["Caramelized Onions", 1, 1.35, 1.75, 2.25], 
"Carrot" : ["Carrot", 1, 1.35, 1.75, 2.25], 
"Chicken Apple Sausage" : ["Chicken Apple Sausage", 1, 1.35, 1.75, 2.25], 
"Clams" : ["Clams", .8, 2, 2.7, 3.5, 4.5], 
"Feta Cheese" : ["Feta Cheese", .8, 2, 2.7, 3.5, 4.5],
"Garlic" : ["Garlic", 1, 1.35, 1.75, 2.25], 
"Goat Cheese" : ["Goat Cheese", .8, 2, 2.7, 3.5, 4.5], 
"Gorgonzola Cheese" : ["Gorgonzola", .8, 2, 2.7, 3.5, 4.5], 
"Grilled Chicken" : ["Grilled Chicken", .8, 2, 2.7, 3.5, 4.5], 
"Ground Beef" : ["Ground Beef", 1, 1.35, 1.75, 2.25],
"Ham" : ["Ham", 1, 1.35, 1.75, 2.25], 
"Italian Sausage" : ["Italian Sausage", 1, 1.35, 1.75, 2.25], 
"Jalapeños" : ["Jalapeños", 1, 1.35, 1.75, 2.25], 
"Kalamata Olives" : ["Kalamata Olives", 1, 1.35, 1.75, 2.25], 
"Meatball" : ["Meatball", 1, 1.35, 1.75, 2.25], 
"Mushrooms" : ["Mushrooms", 1, 1.35, 1.75, 2.25], 
"Onion" : ["Onion", 1, 1.35, 1.75, 2.25],
"Oregano" : ["Oregano", 1, 1.35, 1.75, 2.25], 
"Pepperoni" : ["Pepperoni", 1, 1.35, 1.75, 2.25], 
"Pesto" : ["Pesto", .8, 2, 2.7, 3.5, 4.5], 
"Pineapple" : ["Pineapple", 1, 1.35, 1.75, 2.25], 
"Red Onion" : ["Red Onion", 1, 1.35, 1.75, 2.25], 
"Ricotta Cheese" : ["Ricotta Cheese", 1, 1.35, 1.75, 2.25], 
"Roasted Eggplant" : ["Roasted Eggplant", 1, 1.35, 1.75, 2.25], 
"Roasted Red Peppers" : ["Roasted Red Peppers", 1, 1.35, 1.75, 2.25], 
"Roasted Potatoes" : ["Roasted Potatoes", 1, 1.35, 1.75, 2.25], 
"Salami" : ["Salami", 1, 1.35, 1.75, 2.25], 
"Spinach" : ["Spinach", 1, 1.35, 1.75, 2.25], 
"Sun-dried Tomatoes" : ["Sun-dried Tomatoes", 1, 1.35, 1.75, 2.25], 
"Tomatoes" : ["Tomatoes", 1, 1.35, 1.75, 2.25], 
"Zucchini" : ["Zucchini", 1, 1.35, 1.75, 2.25],
}

// Push toppings list to HTML

function pushToppings(toppings){
	for(toppings in toppingsList){
		var toppingName = toppingsList[toppings][0];
		$("#toppings").append('<input type="checkbox" id="'+toppingName+'" value="'+toppingName+'"> <label for="'+toppingName+'">'+toppingName+'</label>');
	}
}

pushToppings(toppingsList);

// Pasta List
// 0 is name, 1 is price, 2 is price with a modifier (adding meatballs or prawns, for example), 3 is gluten free price
var pastaList = {

"Fettuccine Alfredo": [],
"Fettuccine With Clams": [],
"Add Prawns": [],
"Fettuccine with Chicken": [],
"Fettuccine with Pesto": [],
"Fettuccine with Mushroom": [],
"Lasagna (Marinara or Meat Sauce)": [],
"Ravioli (Cheese or Meat Ravioli, Marinara or Meat Sauce)": [],
"Ravioli w/ Pesto": [],
"Spaghetti (Marinara or Meat Sauce)": [],
"Add Meatballs": [],
"Extra Meatballs / Side of Meatballs": [],

}