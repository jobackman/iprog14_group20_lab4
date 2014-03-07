//ExampleView Object constructor
var selectDishView = function (row,model) {
	
//Creating the components dynamically. Here we create the following HTML content:

	//div we just store in temporary variable because we won't need it later
	var selectDish = $("<div>");
		selectDish.addClass("col-md-10");
		selectDish.attr('id', 'selectDishView');
		var h3 = $("<h3>");
			h3.html('Select Dish');
			selectDish.append(h3);
		var hr = $("<hr>");
			hr.addClass("divider");
			selectDish.append(hr);
		var md5 = $("<div>");
			md5.addClass("col-md-5");
			var form = $("<form>");
				form.html('<input type="search" id="searchText"><input type="submit" value="Search" id="searchButton">');
				md5.append(form);
			selectDish.append(md5);
		var md5select = $("<div>");
			md5select.addClass("col-md-5");
			md5select.html('<select id="selectList"><option value="starter">Starters</option><option value="main dish">Main Courses</option><option value="dessert">Desserts</option></select>');
			selectDish.append(md5select);

		row.append(selectDish);
	
	var md10 = $('<div>');
		md10.addClass("col-md-10");
		md10.attr("id", "dishes");
		var md10row = $("<div>");
		md10row.addClass("row");
		md10row.attr("id", "dishRow");
	row.append(md10);
	

		
	//get the elements 
	this.dishes = row.find("#dishes");
	this.selectList = row.find("#selectList");
	//this.searchText = document.getElementById("searchText");
	this.searchText = row.find("#searchText");
	this.searchButton = row.find("#searchButton");


	//list to be able to set onclick's on the dishes in the controller	
	//this.thumbnailList = [];
	
	
	this.updateDishes = function updateDishes(test, filter){
		var first = false;
		var list = model.getAllDishes(test, filter);	//dinnerModel -> this.getAllDishes = function (type,filter) {
		//alert("listlängd i updatedishes: "+list.length);
		if(list.length==0){
			alert("inga resultat...");
			row.append("<h2 id='emptyResult'>No results found</h2>");
		}
		else{

			//this.thumbnailList = [];
			for(i=0; i<list.length; i++){
				//alert("listans längd är: "+list.length +" namnet är: " + list[i].name);
				//alert("borde visa dishes efter man klickat ok här, inne i for-loopen...");
				var md2 = $("<div>");
						md2.addClass("col-md-2");
						var thumbnail = $('<div>');
							thumbnail.attr("id", +list[i].id);
							thumbnail.addClass("thumbnail");
							thumbnail.html('<img src="images/'+list[i].image+'"><strong>'+list[i].name+'</strong><p>"'+list[i].description+'</p>');							md2.append(thumbnail);
						md10row.append(md2);
					md10.append(md10row);	
					
					this.thumbnail = row.find("#"+list[i].id);
					//alert("innan ThumbnailController...");
					new ThumbnailController(this.thumbnail,model,list[i]);
					//alert("efter ThumbnailController...");
			}
			//alert("efter for-loopen....");
			row.append(md10);
			//alert("efter row.append(md10)");
		}
		//return this.thumbnailList;
	}

	//alert("innan updateDishes");
	this.updateDishes(model.getSelectedDishType(), "");
	//alert("innan updateDishes");
	//alert("rad 1");
	//get the selected dishtype from the scroll list
	this.select = document.getElementById('selectList');
	//alert("rad 2");
	//this.selectedDishType =	this.select.options[this.select.selectedIndex].value;
	this.selectedDishType = model.getSelectedDishType();
	//alert("rad 3");
	//test
	//this.thumbnailList=this.updateDishes(this.selectedDishType, "French toast");
	//if(model.observers.length ==1){
	//Register an observer to the model
	model.addObserver(this);
	//alert("rad 4");
	//alert("nu har vi lagt till en ny observer till selectedDishView");
	//}

	//else {
	//	alert("model.observer.length är inte 1");
	//}
	
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		//alert("hej");
		$("#dishRow").empty();

		// $('#dishes').empty();
		// 		if ($("#dishRow").length==0){
		// 			alert ("SELCETDISHVIEW (update) dishRow finns inte");
		// 		}
		// 		else {
		// 			alert ("SELCETDISHVIEW (update) dishRow finns GAAAHH");
		// 			$('#dishes').empty();
		// 		}

		this.selectedDishType =	this.select.options[this.select.selectedIndex].value;
		this.updateDishes(this.selectedDishType);

	}
}