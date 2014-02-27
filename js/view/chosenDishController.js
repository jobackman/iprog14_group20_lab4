//ExampleViewController Object constructor
var chosenDishController = function(view, model, dish) {
	
	view.goBack.click(function(){

		$("#dish").fadeOut(400, function() { 
			$('#dish').remove(); 
			$('#dishes').remove();
			
			$('#pending').html('');
			
			model.removeObserver();
			var selectDish = new selectDishView($("#secondDiv"), model);
			var selectDishC = new selectDishController(selectDish, model);

		});
	});
	
		//TODO: ADD CONFIRM DISH BUTTON EVENT
	view.confirmDish.click(function(){
		model.addDishToMenu(dish.id);
		$("#dish").fadeOut(400, function() { 
			$('#dish').remove(); 
			$('#dishes').remove();
			$('#pending').html('');
			$("<tr><td>"+dish.name+"</td><td class='totalDishPrice'>"+view.totalPrice+"</td></tr>").insertBefore("#totalPriceRow");
			
			//ska väl inte göras i controllern?
			//$("#totalMenuPrice").html(model.getTotalMenuPrice()+' kr');
			model.removeObserver();
			var selectDish = new selectDishView($("#secondDiv"), model);
			var selectDishC = new selectDishController(selectDish, model);

		});
			
	});
}
