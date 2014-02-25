<<<<<<< HEAD
var selectDishController = function(view, model) {
/*
	view.inputNumberOfGuests.click(function(){
		model.setNumberOfGuests(view.inputNumberOfGuests.val());

	});
*/
}
=======
//ExampleViewController Object constructor
var selectDishController = function(view, model ) {
	
	view.thumbnail.click(function(){
		
		$("#selectDishView").fadeOut(400, function() { 
			$('#selectDishView').remove(); 
					
		});

		$("#dishes").fadeOut(400, function() { 
			$('#dishes').remove(); 
			
			
			
			var chosenDish = new chosenDishView($("#secondDiv"), model);
			var chosenDishC = new chosenDishController(chosenDish, model);
			
		});
		 
	});
}
>>>>>>> 79e97db0c062d0a66acfb4ffe3ff133cca76195c
