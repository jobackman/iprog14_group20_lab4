//ExampleViewController Object constructor
var selectDishController = function(view, model) {
	alert("Inne i kontrollern:");
	for (i=0; i<view.thumbnailList.length; i++){
		view.thumbnailList[i].click(function(){		
			alert("thumbnail klickad");
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
	
/*
	view.select.click(function(){
		//går det att göra så här?
		this.selectedDish = model.getAllDishes(view.selectedDish);
	});
*/
}
