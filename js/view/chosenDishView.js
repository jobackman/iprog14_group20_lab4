//ExampleView Object constructor
var chosenDishView = function (row,model) {
	
	
//Creating the components dynamically. Here we create the following HTML content:

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

			md6.html('<h2>' + model.getDish(1).name + '</h2>' + '<img src="images/'+model.getDish(1).image+'">' + '<p>'+model.getDish(1).description + '</p>'+'<button type="submit" class="btn btn-default" id="goBack">Back to Select Dish</button>');
			
			chosenDish.append(md6);

		var md6Ingredient = $("<div>");
			md6Ingredient.addClass("col-md-6");
			md6Ingredient.attr('id', 'ingredients');
			
			var loopedIngredients = "";
			var i=0;
			
			while (i<model.getDish(1).ingredients.length){
				loopedIngredients = loopedIngredients + '<table class="table"><tr><td>'+model.getDish(1).ingredients[i].name+'</td>' +'<td>'+ 'quantity: '+model.getDish(1).ingredients[i].quantity+'</td>' + '<td>'+'unit: '+model.getDish(1).ingredients[i].unit+'</td>' +'<td>'+ 'SEK '+model.getDish(1).ingredients[i].price +'</td>' + '</tr>';
				i++;
			}

			md6Ingredient.html('<h3>Ingredients for: ' + model.getNumberOfGuests() + ' people' + '</h3>'+ loopedIngredients + '<table class="table"><tr><td><button type="submit" class="btn btn-default" id="confirmDish">Confirm Dish</button></td></tr>');
			
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