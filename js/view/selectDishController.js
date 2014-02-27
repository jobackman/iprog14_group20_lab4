//ExampleViewController Object constructor
var selectDishController = function(view, model) {
	//alert("listlängd i controllern: "+view.thumbnailList.length);
	setThumbnailListener();
	//alert("första setThumbnailListener");
	
	view.selectList.change(function(){		
		model.setSelectedDishType(view.selectedDishType);
		//alert("listlängd i onchange: "+view.thumbnailList.length);
		
		setThumbnailListener();
		//alert("andra setThumbnailListener");
		
	});
	
	view.searchButton.click(function(){
		var searchedFor = view.searchText.val();
		alert(model.getAllDishes("starter", searchedFor).length);
	});
	
	
	function setThumbnailListener(){
		for (i=0; i<view.thumbnailList.length; i++){
			//alert("listlängd i forloop: "+view.thumbnailList.length);
			//alert("inne i forloopen i onchange");
			view.thumbnailList[i].click(function(){
				$("#selectDishView").fadeOut(400, function() { 
					$('#selectDishView').remove(); 		
				});
	
				$("#dishes").fadeOut(400, function() { 
					$('#dishes').remove();
					//Pending priset i LEFT MENU, Priset ska hämtas från Vald dish, INTE TotalMenuPrice
					$("#pending").html('<td>Pending:</td><td>'+model.getTotalMenuPrice()+'</td>');
					//$('#dishRow').remove();
					if ($("#dishes").length){
						alert("Dishes FINNS");
					}
					else { 
					alert("Dishes finns INTE");}
					if ($("#dishRow").length){
						alert("DishROW FINNS");
					}
					else { 
					alert("Dishrow finns INTE");}
					
					var chosenDish = new chosenDishView($("#secondDiv"), model);
					var chosenDishC = new chosenDishController(chosenDish, model);
				}); 
			});
		}
	}
}
