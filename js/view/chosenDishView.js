//ExampleView Object constructor
var chosenDishView = function (row,model, dish) {
	
	
//Creating the components dynamically. Here we create the following HTML content:

	this.dish = dish;
	//div we just store in temporary variable because we won't need it later
	var chosenDish = $("<div>");
		chosenDish.addClass("col-md-10");
		chosenDish.attr('id', 'dish');
		var md6 = $("<div>");
			md6.addClass('col-md-6');

			/////////// /////////// /////////// /////////// /////////// /////////// ///////////////////
			///////////																		 //////////
			/////////// CHANGE THE NUMBER 1 (ONE) BELOW TO THE ID SENT FROM selectedDishView //////////
			///////////																		 //////////
			/////////// /////////// /////////// /////////// /////////// /////////// ///////////////////

			md6.html('<h2>' + dish.name + '</h2>' + '<img src="images/'+dish.image+'">' + '<p>'+dish.description + '</p>'+'<button type="submit" class="btn btn-default" id="goBack">Back to Select Dish</button>');
			
			chosenDish.append(md6);

		var md6Ingredient = $("<div>");
			md6Ingredient.addClass("col-md-6");
			md6Ingredient.attr('id', 'ingredients');
			
			var loopedIngredients = "";
			var totalPrice=0;
			
			for (i=0; i<dish.ingredients.length; i++){
				var quantityAndUnit = dish.ingredients[i].quantity + " " + dish.ingredients[i].unit;
				var ingredient = dish.ingredients[i].name;
				var price = dish.ingredients[i].price * model.getNumberOfGuests();
				totalPrice += price;
			
				loopedIngredients = loopedIngredients + '<tr><td>'+quantityAndUnit+'</td><td>'+ingredient+'</td><td>SEK</td><td class="ingredientValue">'+price+'</td></tr>';
			}



			md6Ingredient.html('<h3>Ingredients for: ' + model.getNumberOfGuests() + ' people' + '</h3><table class="table">'+ loopedIngredients +'<tr><td colspan="2"><button type="submit" class="btn btn-default" id="confirmDish">Confirm Dish</button></td><td><strong>Total: </strong></td><td>'+totalPrice+'</td></tr>');
			
		
			chosenDish.append(md6Ingredient);			
	row.append(chosenDish);

	$("#pending").html('<td>Pending:</td><td>'+totalPrice+'</td>');
	//$("#totalMenuPrice").html(totalMenuPrice+totalPrice);
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