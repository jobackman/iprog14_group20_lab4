//ExampleViewController Object constructor
var selectDishController = function(view, model) {
	//alert("listlängd i controllern: "+view.thumbnailList.length);
	for (i=0; i<view.thumbnailList.length; i++){
		view.thumbnailList[i].click(function(){		
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
	
	view.selectTest.change(function(){		
		model.setSelectedDishType(view.selectedDishType);
		//alert("vald typ: "+view.selectedDishType);
	});
}
