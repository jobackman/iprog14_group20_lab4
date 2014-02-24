//ExampleViewController Object constructor
var welcomeController = function(view, model ) {
	
	view.startButton.click(function(){
		
		$(".startDiv").fadeOut(400, function() { 
			$('.startDiv').remove(); 


			$("body").css("background", "transparent");
			var row = $("<div>"); row.addClass("row"); row.attr("id", "secondDiv");
			$('#container').append(row);
			
			var leftMenu = new leftMenuView(row, model);
			var leftControl = new leftMenuController(leftMenu, model);
			var selectDish = new selectDishView(row, model);
			
		});
		 
	});
}
