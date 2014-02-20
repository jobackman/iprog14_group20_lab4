//ExampleViewController Object constructor
var welcomeController = function(view, model ) {
	
	view.startButton.click(function(){
		
		$(".startDiv").hide(400, function() { $('.startDiv').remove(); });
		//add the next views. 
	});
}
