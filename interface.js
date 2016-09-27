// Toggle Other Food and Drinks (so they don't clutter us up)
$("#pizza-hide").hide();
$("#food-hide").hide();
$("#drinks-hide").hide();

$("#pizza-toggle").click(function(){
	$("#pizza-hide").toggle(800);
});

$("#food-toggle").click(function(){
	$("#food-hide").toggle(800);
});

$("#drinks-toggle").click(function(){
	$("#drinks-hide").toggle(800);
});