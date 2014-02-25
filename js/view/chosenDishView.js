//ExampleView Object constructor
var chosenDishView = function (row,model) {
	
	
//Creating the components dynamically. Here we create the following HTML content:

	//div we just store in temporary variable because we won't need it later
	var chosenDish = $("<div>");
		chosenDish.addClass("col-md-10");
		chosenDish.attr('id', 'dish');
		var md6 = $("<div>");
			md6.addClass('col-md-6');
			//MAKE DYNAMIC LATER
			md6.html('<h2>Ice cream</h2><img src="images/icecream.jpg"><p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p><button type="submit" class="btn btn-default" id="goBack">Back to Select Dish</button>');
			chosenDish.append(md6);

		var md6Ingredient = $("<div>");
			md6Ingredient.addClass("col-md-6");
			md6Ingredient.attr('id', 'ingredients');
			md6Ingredient.html('<h3>Ingredients for 4 people</h3><table class="table"><tr><td>2tbsp</td><td>olive oil</td><td>SEK</td><td>0.20</td></tr><tr><td><button type="submit" class="btn btn-default" id="confirmDish">Confirm Dish</button></td><td><strong>Total: </strong></td><td>SEK</td><td>77.20</td></tr></table>');
			chosenDish.append(md6Ingredient);

	row.append(chosenDish);
	
	this.goBack = row.find("#goBack");
	this.confirmDish = row.find("#confirmDish");

	

		
		//row.html(model.getAllDishes());


		

	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		//console.log("TEST "+this.numberOfGuests.html(model.getNumberOfGuests()));
	}
}