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
	
	view.select.click(function(){
		//går det att göra så här?
		this.selectedDish = model.getAllDishes(view.selectedDish);
	});
}
