//ExampleView Object constructor
var selectDishView = function (row,model) {
	
	
//Creating the components dynamically. Here we create the following HTML content:

	//div we just store in temporary variable because we won't need it later
	var selectDish = $("<div>");
		selectDish.addClass("col-md-10");
		selectDish.attr('id', 'selectDishView');
		selectDish.html('<h3>Select Dish</h3>');
	

		
		//row.html(model.getAllDishes());
		row.append(selectDish);

		

	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		console.log("TEST "+this.numberOfGuests.html(model.getNumberOfGuests()));
	}
}