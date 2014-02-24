//ExampleViewController Object constructor
var leftMenuController = function(view, model) {
	
	view.numberOfGuests.click(function(){
		//model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
}
