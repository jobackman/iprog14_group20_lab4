//ExampleViewController Object constructor
var leftMenuController = function(view, model) {
	view.inputNumberOfGuests.click(function(){
		model.setNumberOfGuests(view.inputNumberOfGuests.val());

	});
}
