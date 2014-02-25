//ExampleViewController Object constructor
var welcomeController = function(view, model ) {
	
	view.startButton.click(function(){
		
		$(".startDiv").fadeOut(400, function() { 
			$('.startDiv').remove(); 
			$("body").css("background", "transparent");
			var row = $("<div>"); 
				row.addClass("row"); 
				row.attr("id", "secondDiv");
			
			$('#container').append(row);
			
			var leftMenu = new leftMenuView($("#secondDiv"), model);
			var leftControl = new leftMenuController(leftMenu, model);
			
			
			var selectDish = new selectDishView(row, model);
<<<<<<< HEAD
			var selectDishControl = new selectDishController(selectDish, model);
=======
			var selectDishC = new selectDishController(selectDish, model);
			
>>>>>>> 79e97db0c062d0a66acfb4ffe3ff133cca76195c
		});
		 
	});
}
