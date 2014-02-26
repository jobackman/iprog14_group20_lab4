//ExampleView Object constructor
var overviewView = function (container,model) {

	//Creating the components dynamically. Here we create the following HTML content:

	//div we just store in temporary variable because we won't need it later
	var overview = $("<div>");
		overview.addClass("col-md-12");
		overview.attr('id', 'overview');
		
		var row = $("<div>");
			row.addClass('row');

			var md10 = $("<div>");
				md10.addClass('col-md-10');	
				md10.html('<h3> My Dinner: 4 people</h3>'); // INSERT FROM MODEL LATER
			

			var md2btn = $("<div>");
				md2btn.addClass('col-md-2');
				md2btn.attr("id", "overviewBtn");
				md2btn.html('<button type="submit" class="btn btn-default">Back to Select Dish</button>');

		row.append(md10);
		row.append(md2btn);

	overview.append(row);	
			
	var row1 = $("<div>");
		row1.addClass("row");
		row1.attr("id", "row1");

		var overviewDishes = $("<div>");
			overviewDishes.addClass("col-md-10");
			overviewDishes.attr("id", "overViewDishes");
			// MAKE DYNAMIC LATER
			overviewDishes.html('<div class="col-md-2"><div class="thumbnail"><a href="#"><img src="images/icecream.jpg"></a><h3>Ice cream</h3><p class="price">77 SEK</p>	</div></div><div class="col-md-2"><div class="thumbnail"><a href="#"><img src="images/icecream.jpg"></a><h3>Ice cream</h3><p class="price">77 SEK</p>	</div></div>');

	row1.append(overviewDishes);

	var totalPrice = $("<div>");
		totalPrice.addClass("col-md-2");
		totalPrice.attr("id", "totalPrice");

		var totalPriceContent = $("<div>");
			totalPriceContent.attr("id", "totalPriceContent");
			//MAKE DYMANIC LATER
			totalPriceContent.html('<p> Total: </p> <p class="price"> 341 SEK</p>');
		
		totalPrice.append(totalPriceContent);
	
	row1.append(totalPrice);
	

	var row100 = $("<div>");
		row100.addClass("row");
		row100.attr("id", "row100");

		var span = $("<span>");
			span.addClass("divider");

			var printButton = $("<div>");
				printButton.addClass("col-md-12");
				printButton.attr("id", "printButton");
				printButton.html('<button type="submit" class="btn btn-default center-block">Print Full Recipe</button>');
	
	row100.append(span);
	row100.append(printButton);
	
	container.append(overview);
	container.append(row1);
	container.append(row100);
	
	this.printButton = container.find("#printButton");
	this.overviewBtn = container.find("#overviewBtn");

	

		


		

	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		//console.log("TEST "+this.numberOfGuests.html(model.getNumberOfGuests()));
	}
}
 
