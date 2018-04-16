function refresh(refreshData, ball){
	//console.log(refreshData.frame+" "+refreshData.seconds);

	let randomX = Math.random();
	let randomY = Math.random()/2;

	let positions = ['left','top','bottom','right'];
	//console.log(ball.position.left+"|"+randomX+","+randomY);

	//console.log("ball "+ball.position);

	let collobj = collisionDetect(ball);
	let displace = 20;

	//console.log(collobj);

	if(collobj.collision == true){

		let angle = ball.getangle();
		let impactside = collobj.point;

		console.log("collision at "+impactside+" angle: "+angle.x+","+angle.y);
		if(impactside == 'left'){
			angle = {x:1-angle.x, y:(ball.angle.y)};
			ball.setangle(angle);
			ball.set(impactside,displace,ball.getangle());

		}

		if(impactside == 'right'){

			angle = {x:1-angle.x, y:(ball.angle.y)};
			ball.setangle(angle);
			ball.set(impactside,displace,ball.getangle());
		}

		if(impactside == 'bottom'){
			angle = {x:angle.x, y:1-(ball.angle.y)};
			ball.setangle(angle);
			ball.set(impactside,displace,ball.getangle());
		}

		if(impactside == 'top'){
			angle = {x:angle.x, y:(ball.angle.y)-1};
			ball.setangle(angle);
			ball.set(impactside,displace,ball.getangle());
		}

	}

	else{
		let angleNoCollision = ball.getangle();
		ball.set(ball.getDirection(),displace,angleNoCollision);
	}


	function collisionDetect(particle){

		let windowX = $("#box").width();
		let windowY = $("#box").height();

		//console.log(particle.getPos());

		//collision on right
		if(particle.getPos().left >= (windowX-40)){
			particle.direction = 'right';
			return {collision:true, point:'right'};
		}

		//collision on bottom
		else if(particle.getPos().top >= (windowY-20)){
			particle.direction = 'bottom';
			return {collision:true, point:'bottom'};
		}

		//collision on left
		else if(particle.getPos().left <= 10){
			particle.direction = 'left';
			return {collision:true, point:'left'};
		}

		//collision on top
		else if(particle.getPos().top <= 10){
			particle.direction = 'top';
			return {collision:true, point:'top'};
		}

		else{
			return {collision:false, point:''};
		}
	}
	//ball.set(positions[randomX],20);

}

$(document).ready(function(){


	function setPos(direction,magnitude,angle){


		let origpos = $(".particle").position();
		//console.log(position);
		let anglex = angle.x;
		let angley = angle.y;

		//moves down
		if(direction == 'left'){
			$(".particle").css({
				'left':(origpos.left+(anglex*magnitude))+'px',
				'top':(origpos.top+(angley*magnitude))+'px'
			});
				//console.log($(".particle").position().left);
		}

		else if(direction == 'top'){

			$(".particle").css({
				'top':(origpos.top+(angley*magnitude))+'px',
				'left':(origpos.left+(anglex*magnitude))+'px',
		});
		}

		else if(direction == 'right'){
			$(".particle").css({
				'left':(origpos.left-(anglex*magnitude))+'px',
				'top':(origpos.top+(angley*magnitude))+'px',
		});
		}

		else if(direction == 'bottom'){
			$(".particle").css({
				'top':(origpos.top-(angley*magnitude))+'px',
				'left':(origpos.left+(anglex*magnitude))+'px',
		});
		}

		else{
			console.log("whoops");
		}
		}

	var ball = {
		angle : {x:1 , y:0.9},
		direction : 'left',
		position : $(".particle").position(),
		set : setPos,

		getangle : function(){
			return this.angle;
		},

		setangle : function(newangle){
			this.angle = newangle;
		},

		getPos : function(){
			return $(".particle").position();
		},

		getDirection : function(){
			return this.direction;
		},

		flipDirection : function(){
			if(this.direction == 'left'){
				this.direction = 'right';
				return this.direction;
			}

			else if(this.direction == 'right'){
				this.direction = 'left';
				return this.direction;

			}

			else if(this.direction == 'top'){
				this.direction = 'bottom';
				return this.direction;

			}			

			else if(this.direction == 'bottom'){
				this.direction = 'top';
				return this.direction;

			}
		}
	};


	let frames = 0;
	let seconds = 0;

	let timer = setInterval(() => {
		if(frames >= 60){
			frames = 0;
			++seconds;
		}

		++frames;
		function refreshobj(frames,seconds){
			this.frame = frames;
			this.seconds = seconds;
		}


		refresh(new refreshobj(frames,seconds), ball);

	}, 32);

	$(document).on("click", ()=>{

		clearInterval(timer);
	})
});