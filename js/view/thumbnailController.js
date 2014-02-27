var ThumbnailController = function(view, model, dish ) {

	view.click(function(){
		alert("skriver ut id för elementet som är först i listan: "+ dish.name);	
		$("#selectDishView").fadeOut(400, function() { 
			$('#selectDishView').remove(); 	

		});

		$("#dishes").fadeOut(400, function() { 
			$('#dishes').remove();
			//Pending priset i LEFT MENU, Priset ska hämtas från Vald dish, INTE TotalMenuPrice
			$("#pending").html('<td>Pending:</td><td>'+model.getTotalMenuPrice()+'</td>');
			var chosenDish = new chosenDishView($("#secondDiv"), model,dish);
			var chosenDishC = new chosenDishController(chosenDish, model);
			//chosenDish.update();
			
		}); 

	})

}