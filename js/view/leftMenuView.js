//ExampleView Object constructor
var leftMenuView = function(row,model,dish) {
	

//Creating the components dynamically. Here we create the following HTML content:	

	//div we just store in temporary variable because we won't need it later
	var leftMenu = $("<div>");
	//and we add the text-primary class to make it blue
	leftMenu.addClass("col-md-2");
	leftMenu.attr('id', 'leftMenu');
	
	var h2 = $("<h2>");	
		h2.html('My Dinner'); 
		leftMenu.append(h2);
	var people = $("<p>"); 
		people.html('People'); 
		leftMenu.append(people);
	var form = $("<form>"); 
		form.html('<input type="number" id="inputNumberOfGuests" value="0" min="0">'); 
		leftMenu.append(form);
	var hr = $("<hr>"); hr.addClass("divider"); 
		leftMenu.append(hr);
	var dishtable = $("<table>"); 
		dishtable.addClass("table"); 
		var table = $("<table>"); 
			table.addClass("table");
			table.html('<tr><th>Dish name</th><th>Cost</th></tr><tr></tr><tr id="pending"></tr><tr id="totalPriceRow"><td><strong>Total:</strong></td><td id="totalMenuPrice"></td></tr>');
		leftMenu.append(table);		

	leftMenu.append(hr);	//En till divider, använd förra igen
	
	
	//Test span to try to send the update of number of guests
/*
	var spanTest = $("<span>");
		spanTest.attr("id", "updateNumberofGuests");
		leftMenu.append(spanTest);
*/
		
		

	
	var button = $("<button>"); 
		button.addClass("btn btn-default");
		button.attr('type', 'submit');
		button.attr("id", "confirmDinnerButton");
		button.html("Confirm Dinner");
		leftMenu.append(button);




	row.append(leftMenu);


	this.spanNumberofGuests = row.find("#updateNumberofGuests");
	this.inputNumberOfGuests = row.find("#inputNumberOfGuests");
	this.pending = row.find("#pending");
	this.totalMenuPrice = row.find("#totalMenuPrice");

	this.confirmDinnerButton = row.find("#confirmDinnerButton");
	
	
	//Set the inital values of the components
	this.spanNumberofGuests.html(model.getNumberOfGuests());
	this.totalMenuPrice.html(model.getTotalMenuPrice());

	//Register an observer to the model
	model.addObserver(this);
	
		//This function gets called when there is a change at the model
	this.update = function(arg){
		//this.spanNumberofGuests.html(model.getNumberOfGuests()); 
		//this.pending.html(model.getTotalMenuPrice());
		this.totalMenuPrice.html(model.getTotalMenuPrice());
	}
}