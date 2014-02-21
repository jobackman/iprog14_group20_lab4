//ExampleViewController Object constructor
var welcomeController = function(view, model ) {
	
	view.startButton.click(function(){
		
		$(".startDiv").fadeOut(400, function() { 
			$('.startDiv').remove(); 

			//TODO: Måste kunna ladda in nya javascript, denna vill ej funka. 
			//$.getScript('js/view/SecondActivity.js', function() {
  			//	console.debug('SecondActivity loaded.');
			//});


			var second = new SecondActivity($(".container"), model);
		});
		 
	});
}
