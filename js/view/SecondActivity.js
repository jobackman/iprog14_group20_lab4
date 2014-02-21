//ExampleView Object constructor
var SecondActivity = function (container,model) {
	
	
//Creating the components dynamically. Here we create the following HTML content:

	
	//Second page's ROW-div in which we put the Left Menu- & Select Dish divs. 
	var secondDiv = $("<div>");
	secondDiv.addClass("row secondDiv");
	container.append(secondDiv);

	//TODO: Need to load new javascripts so we can create the new views. 

	//$.getScript('leftMenuView.js', function() {
  	//	console.debug('leftMenuView loaded.');
	//});

	var leftMenu = new leftMenuView(container, model)

	//Register an observer to the model
	model.addObserver(this);
}