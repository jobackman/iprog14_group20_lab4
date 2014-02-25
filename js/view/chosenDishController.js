//ExampleViewController Object constructor
var chosenDishController = function(view, model ) {
	
	view.goBack.click(function(){
		
		

		$("#dish").fadeOut(400, function() { 
			$('#dish').remove(); 
			
			
			
			var selectDish = new selectDishView($("#secondDiv"), model);
			var selectDishC = new selectDishController(selectDish, model);
			
		});
		 
	});
}
