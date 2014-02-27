//ExampleViewController Object constructor
var selectDishController = function(view, model) {
	

	//Om man väljer en rätt i drop-downmenyn:
	view.selectList.change(function(){
		//alert("har gått in i change");
		model.setSelectedDishType(view.selectedDishType);
		//$('#dishes').remove();		

		
	});
	
	//Om man söker på något:
	view.searchButton.click(function(){
		var searchedFor = view.searchText.val();
		var searchedList = model.getAllDishes(view.selectedDishType, searchedFor); //lista med de rätterna man sökt efter
		
		//rensa view'n
		$('.thumbnail').empty().remove();
		$('#dishRow').empty();
		$('#dishes').empty();
		$('#emptyResult').remove();
		
		view.updateDishes(view.selectedDishType, searchedFor);

	});
	
}
