var lastPageController = function(view, model ) {
	//alert("inne i lastPageController");
	view.overviewBtn.click(function(){
		$("#overview").fadeOut(400, function() { 
			$('#overview').remove(); 					
		});

		$("#row1").fadeOut(400, function() { 
			$('#row1').remove(); 
			var overview = new overviewView($("#container"), model);
			var overviewC = new overviewController(overview, model);
		});
	});
}