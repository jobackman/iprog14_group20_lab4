//ExampleViewController Object constructor
var chosenDishController = function(view, model ) {
	
	view.goBack.click(function(){

		$("#dish").fadeOut(400, function() { 
			$('#dish').remove(); 
			$('#pending').html('');
			
			var selectDish = new selectDishView($("#secondDiv"), model);
			var selectDishC = new selectDishController(selectDish, model);

		});
	
	//TODO: ADD CONFIRM DISH BUTTON EVENT

	});
}
