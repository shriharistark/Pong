$(document).ready(function(){

	$("#bone").click(function(event){

		//console.log("offset: "+ $("#bone")[0].getBoundingClientRect().top);
	var counter = 50;
	/*
	function myFunction() {
    	counter -= 10;
    	setTimeout(function(){
    		console.log(counter);
    		myFunction();
    	}, 200);
		}*/

(function loop() {
    var rand = Math.round(Math.random() * (500 - 10)) + 10;
    setTimeout(function() {
            shoot(rand);
            loop();  
    }, rand);
}());
	
	//setInterval(setTimeout(shoot, 10),100);
	
	});

	function shoot(counter){

		//console.log(counter);
		if(($("#ball")[0].getBoundingClientRect().left) < ($(window).width()-100)){
		$("#ball").css({
			'left' : ($("#ball")[0].getBoundingClientRect().left + 2) + 'px',
		});
		}

	}

	$("#container").mousemove(function(event){

		//console.log(event.pageY);
		let actualX = event.pageX - 90;
		let actualY = event.pageY - 80;
		//console.log("doc height: "+$(this).height());
		if(actualY < 0 || event.pageY > $(this).height())
			return "";
		$("#bone").css({
			//'left' : actualX+'px',
			'top' : actualY+'px'
		});
		$("#ball").css({
			'top' : (actualY+90) + 'px'
		})

	});

}());