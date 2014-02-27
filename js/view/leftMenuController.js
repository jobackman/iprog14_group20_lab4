	//ExampleViewController Object constructor
var leftMenuController = function(view, model) {
	view.inputNumberOfGuests.click(function(){
		model.setNumberOfGuests(view.inputNumberOfGuests.val());
		//$("#totalMenuPrice").html(model.getTotalMenuPrice()+' kr');
	});

	view.confirmDinnerButton.click(function(){
		$("#secondDiv").fadeOut(400, function() { 
			$('#secondDiv').remove(); 
					
			var overview = new overviewView($("#container"), model);
			var overviewC = new overviewController(overview, model);
		});	
	});
}
