//ExampleViewController Object constructor
var selectDishController = function(view, model) {
	//alert("listlängd i controllern: "+view.thumbnailList.length);
	setThumbnailListener(view.thumbnailList);
	//alert("första setThumbnailListener");



	view.selectList.change(function(){		
		model.setSelectedDishType(view.selectedDishType);
		//alert("listlängd i onchange: "+view.thumbnailList.length);
		
		
		//view.updateDishes(model.getSelectedDishType);
		
		setThumbnailListener(view.thumbnailList);
		//alert("andra setThumbnailListener");
		
	});
	
	view.searchButton.click(function(){
		var searchedFor = view.searchText.val();
		var searchedList = model.getAllDishes(view.selectedDishType, searchedFor); //lista med de rätterna man sökt efter
		
		//rensa view'n
		$('.thumbnail').empty().remove();
		$('#dishRow').empty();
		$('#dishes').empty();
		$('#emptyResult').remove();
		
		//uppdatera med vald dishType samt det man sökt efter
		view.updateDishes(view.selectedDishType, searchedFor);

		setThumbnailListener(view.thumbnailList);
	});
	
	//Kanske kör setThumbnailListener(lista)..?
	function setThumbnailListener(lista){
		for (i=0; i<lista.length; i++){
			
			//alert("inne i forloopen i onchange");
			lista[i].click(function(){
				// alert("skriver ut id för elementet som är först i listan: "+$(this).attr("id"));	
				// $("#selectDishView").fadeOut(400, function() { 
				// 	$('#selectDishView').remove(); 	

				// });
	
				// $("#dishes").fadeOut(400, function() { 
				// 	$('#dishes').remove();
				// 	//Pending priset i LEFT MENU, Priset ska hämtas från Vald dish, INTE TotalMenuPrice
				// 	$("#pending").html('<td>Pending:</td><td>'+model.getTotalMenuPrice()+'</td>');
				// 	var chosenDish = new chosenDishView($("#secondDiv"), model);
				// 	var chosenDishC = new chosenDishController(chosenDish, model);
				// 	//chosenDish.update();
					
				// }); 
			});
		}
	}
}
