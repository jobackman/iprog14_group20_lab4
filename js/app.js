$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
		//var exampleView = new ExampleView($("#exampleView"),model);
   		//var exampleViewController = new ExampleViewController(exampleView,model);
   	var welcome = new welcomeView($("#container"), model);
   	var welcomeControl = new welcomeController(welcome, model);
   	
/*
   	ska förmodligen laddas när vi byter view, alltså när vi klickar på "Create new Dinner"
   	var leftMenu = new leftMenuView($("#leftMenu"), model);
   	var leftControl = new leftMenuController(leftMenu, model);
*/

});