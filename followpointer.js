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
	var rand = Math.round(Math.random() * (5 - 1)) + 1;
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
			
			let diff = Math.abs($("#ball")[0].getBoundingClientRect().top 
				- $("#line")[0].getBoundingClientRect().top);

			let near = function() {
				let diffX = Math.abs($("#line")[0].getBoundingClientRect().top 
					- $("#ball")[0].getBoundingClientRect().top);

				if(diff < 25){
					return true;
				}

				else{
					return false;
				}

			};

			if(diff < 40 && near){

				$("#ball").css({
					'left' : ($("#ball")[0].getBoundingClientRect().left + 2) + 'px',
			//'top' : ($("#ball")[0].getBoundingClientRect().top + 2) + 'px',

		});
			}
		}

		function moveforward(){
		console.log(" moving forward");

		$("#ball").css({
			'left' : ($("#ball")[0].getBoundingClientRect().left + 2) + 'px',
			//'top' : ($("#ball")[0].getBoundingClientRect().top + 2) + 'px',

		});
	}

	function movebackward(){
		console.log(" moving reverse");
		$("#ball").css({
			'right' : ($("#ball")[0].getBoundingClientRect().right + 2) + 'px',
			//'top' : ($("#ball")[0].getBoundingClientRect().top + 2) + 'px',

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

	$("#line").mousedown(function(event){

		console.log("line mousedown triggerd");

		$("#container").mousemove(function(event){
			event.preventDefault();

			$("#line").css({
				//'left' : actualX+'px',
				'top' : event.pageY+'px'
			});

			$("#container").mouseup(function(){
				console.log("line mouseup triggered internal");
				$("#container").off("mousemove");
			});
			
		});

	});



	function ismousedown(){

		let mousedownval = false;
		console.log(mousedownval);

		$("#line").mousedown(function(event){
			mousedownval = true;
		});

		return mousedownval;
	}

}());