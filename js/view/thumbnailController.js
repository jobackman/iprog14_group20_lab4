var ThumbnailController = function(view, model, dish ) {

	view.click(function(){
		//alert("är inne i ThumbnailController, dishen är: "+ dish.name);	
		model.setSelectedDishType("starter");
		$("#selectDishView").fadeOut(400, function() { 
			$('#selectDishView').remove(); 	
			// if ($("#selectDishView").length==0){
			// 	alert ("selectDishView finns inte");
			// }
			// else {
			// 	alert ("selectDishView finns");
			// }

		});

		$("#dishes").fadeOut(400, function() { 
			$('#dishes').remove();
			if ($("#dishes").length==0){
				//alert ("dishes finns inte");
			}
			else {
				//alert ("dishes finns");
				$('#dishes').remove();
				if ($("#dishes").length==0){
					//alert ("dishes finns inte IGEN");
				}
				else {
					//alert ("dishes finns INTE IGEN GAAAHH");
					$('#dishes').remove();
				}

			}
			//Pending priset i LEFT MENU, Priset ska hämtas från Vald dish, INTE TotalMenuPrice
			$("#pending").html('<td>Pending:</td><td>'+model.getTotalMenuPrice()+'</td>');
			var chosenDish = new chosenDishView($("#secondDiv"), model,dish);
			var chosenDishC = new chosenDishController(chosenDish, model, dish);
			//chosenDish.update();
			
		}); 

	})

}