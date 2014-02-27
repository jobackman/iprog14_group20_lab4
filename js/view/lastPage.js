//ExampleView Object constructor
var lastPage = function (container,model) {

	//Creating the components dynamically. Here we create the following HTML content:

	//div we just store in temporary variable because we won't need it later
	var overview = $("<div>");
		overview.addClass("col-md-12");
		overview.attr('id', 'overview');
		
		var row = $("<div>");
			row.addClass('row');

			var md10 = $("<div>");
				md10.addClass('col-md-10');	
				md10.html('<h3> My Dinner: '+model.getNumberOfGuests()+' guests</h3>'); // INSERT FROM MODEL LATER
			

			var md2btn = $("<div>");
				md2btn.addClass('col-md-2');
				md2btn.attr("id", "overviewBtn");
				md2btn.html('<button type="submit" class="btn btn-default">Go back to edit dinner</button>');

		row.append(md10);
		row.append(md2btn);

	overview.append(row);	
	container.append(overview);



			var menu = model.getFullMenu();
			
			for(i=0; i<menu.length; i++){
				var row1 = $("<div>");
					row1.addClass("row");
					row1.attr("id", "row1");

				var lastPage = $("<div>");
					lastPage.addClass("col-md-12");
					lastPage.attr("id", "lastPage");
					lastPage.append('<div class="col-md-2" id="lastPageImage"><div class="thumbnail"><img src="images/'+menu[i].image+'"></div></div>');
			
				row1.append(lastPage);
	

				var dishNameAndText = $("<div>");
					dishNameAndText.addClass("col-md-4");
					dishNameAndText.attr("id", "dishNameAndText");
					dishNameAndText.html('<h2>'+menu[i].name+'</h2><p>'+menu[i].description+'</p>');
			
			
				lastPage.append(dishNameAndText);

				var preparation = $("<div>");
					preparation.addClass("col-md-6");
					preparation.attr("id", "preparation");
					preparation.html('<h2>Preparations</h2><p>'+menu[i].description+'</p>');

					lastPage.append(preparation);

					overview.append(row1);
			}
			





	this.overviewBtn = container.find("#overviewBtn");

	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		//console.log("TEST "+this.numberOfGuests.html(model.getNumberOfGuests()));
	}
}
 
