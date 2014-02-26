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
				form.html('<input type="search" name="search"><input type="submit" value="Search">');
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
	


	//försök att ta ut vald dish från option value
	//med nuvarande tar den ut den översta option value, måste koppla till kontrollern
	//satte dessert överst för att testa, byt tillbaka sen

	
	this.selectTest = row.find("#selectList");
	//alert(this.selectedDishType);
/*
	var spanTest = $("<span>");
		spanTest.attr("id", "SPANTEST");
		//spanTest.append(this.selectedDish);
		row.append(spanTest);
	this.spantest = row.find("#SPANTEST");
	this.spantest.html(this.selectedDishType);
*/
		
	//lista för att hämta ut dishes av vald typ
		//går att ändra till main dish eller dessert	
	this.thumbnailList = [];
	
	
	function updateDishes(test){
		var list = model.getAllDishes(test);
		this.thumbnailList = [];
		for(i=0; i<list.length; i++){
			var md2 = $("<div>");
					md2.addClass("col-md-2");
					var thumbnail = $('<div>');
						thumbnail.attr("id", +list[i].id);
						thumbnail.addClass("thumbnail");
						thumbnail.html('<a href="#"><img src="images/'+list[i].image+'"></a><strong>'+list[i].name+'</strong><p>"'+list[i].description+'</p>');
						md2.append(thumbnail);
					md10row.append(md2);
				md10.append(md10row);		
				
				this.thumbnail = row.find("#"+list[i].id);
				this.thumbnailList.push(this.thumbnail);
		}
		row.append(md10);
		return this.thumbnailList;
	}

		
	this.thumbnailList=updateDishes(model.getSelectedDishType());
	
	this.select = document.getElementById('selectList');
	this.selectedDishType =	this.select.options[this.select.selectedIndex].value;
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
	
	
		$("#dishRow").empty();
		this.selectedDishType =	this.select.options[this.select.selectedIndex].value;
		updateDishes(this.selectedDishType);
	}
}