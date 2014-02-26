//ExampleViewController Object constructor
var overviewController = function(view, model ) {
	
	view.overviewBtn.click(function(){
		$("#overview").fadeOut(400, function() { 
			$('#overview').remove(); 
					
		});

		$("#row1").fadeOut(400, function() { 
			$('#row1').remove(); 
			
			
		});
			$("#row100").fadeOut(400, function() { 
				$('#row100').remove(); 
				
					var row = $("<div>"); 
					row.addClass("row"); 
					row.attr("id", "secondDiv");
				
					$('#container').append(row);
					
					var leftMenu = new leftMenuView($("#secondDiv"), model);
					var leftControl = new leftMenuController(leftMenu, model);
					
					var selectDish = new selectDishView(row, model);
					var selectDishC = new selectDishController(selectDish, model);
		});  
	});
	
/*
	view.select.click(function(){
		//går det att göra så här?
		this.selectedDish = model.getAllDishes(view.selectedDish);
	});
*/
}
