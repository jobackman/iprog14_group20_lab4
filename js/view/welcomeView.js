//ExampleView Object constructor
var welcomeView = function (container,model) {
	
	
	//Creating the components dynamically. Here we create the following HTML content:
// <	div class="row startDiv">
// 			<div class="col-md-6 welcomeDiv">
// 				<h1>A Home Dinner Service</h1>
// 				<hr class="divider">
// 				<p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br></p>
// 				<p>Start quickly</p>
// 				<button type="submit" class="btn btn-default"><a href="#">Create new Dinner</a></button>
// 			</div>
// 			<div class="col-md-6">
// 			</div>
// 		</div>

	//and add it to the the exampleView 
	
	//div we just store in temporary variable because we won't need it later
	var parent = $("<div>");
	//and we add the text-primary class to make it blue
	parent.addClass("row startDiv");

	//Add col-md-6div
	var div1 = $("<div>");
	div1.addClass("col-md-6 welcomeDiv");
	div1.html('<h1>A Home Dinner Service</h1><hr class="divider"><p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br></p><p>Start quickly</p><button type="submit" class="btn btn-default"><a href="#">Create new Dinner</a></button>');
	parent.append(div1);
	
	container.append(parent);


	//Register an observer to the model
	model.addObserver(this);
}
 
