//ExampleView Object constructor
var leftMenuView = function (container,model) {
	
	
//Creating the components dynamically. Here we create the following HTML content:

	
	//div we just store in temporary variable because we won't need it later
	var leftMenu = $("<div>");
	//and we add the text-primary class to make it blue
	leftMenu.addClass("col-md-2 leftMenu");
	
	var h2 = $("<h2>");	h2.html('My Dinner'); leftMenu.append(h2);

	
	container.append(leftMenu);


	//Register an observer to the model
	model.addObserver(this);
}