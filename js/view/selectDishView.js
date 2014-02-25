//ExampleView Object constructor
var selectDishView = function (row,model) {
	
	
//Creating the components dynamically. Here we create the following HTML content:

	//div we just store in temporary variable because we won't need it later
	var selectDish = $("<div>");
		selectDish.addClass("col-md-10");
		selectDish.attr('id', 'selectDishView');
		var h3 = $("<h3>");
			h3.html('Select Dish');
			selectDish.append(h3);
		var hr = $("<hr>");
			hr.addClass("divider");
			selectDish.append(hr);
		var md5 = $("<div>");
			md5.addClass("col-md-5");
			var form = $("<form>");
				form.html('<input type="search" name="search"><input type="submit" value="Search">');
				md5.append(form);
			selectDish.append(md5);
		var md5select = $("<div>");
			md5select.addClass("col-md-5");
			md5select.html('<select id="selectedDish"><option value="starter">Starters</option><option value="maincourse">Main Courses</option><option value="dessert">Desserts</option></select>');
			selectDish.append(md5select);

		row.append(selectDish);
	
	var md10 = $('<div>');
		md10.addClass("col-md-10");
		md10.attr("id", "dishes");
		var md10row = $("<div>");
		md10row.addClass("row");
	row.append(md10);

		
	//get the elements 
	this.dishes = row.find("#dishes");
	
	this.selectedDish = row.find("selectedDish");	//försök att hämta vald rätt, hårdkodas för tillfället nedan  model.getAllDishes("starter").length

	
	for(i=0; i<=model.getAllDishes("starter").length; i++){
		//this.dishes.html(model.getAllDishes("starter")[i].name);
		
		var md2 = $("<div>");
				md2.addClass("col-md-2");
				var thumbnail = $("<div>");
					thumbnail.addClass("thumbnail");
					thumbnail.html('<a href="#"><img src="images/'+model.getAllDishes("starter")[i].image+'"></a><strong>'+model.getAllDishes("starter")[i].name+'</strong><p>"'+model.getAllDishes("starter")[i].description+'</p>');
					md2.append(thumbnail);
				md10row.append(md2);
			md10.append(md10row);

	}
	row.append(md10);

		
		//row.html(model.getAllDishes());


	this.thumbnail = row.find(".thumbnail");

	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		//console.log("TEST "+this.numberOfGuests.html(model.getNumberOfGuests()));
	}
}