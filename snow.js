window.onload = function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;	
	//雪花
	var mp = 10; //雪花最多数为10
	var particles = [];
	for(var i = 0; i < mp; i++){
		particles.push({
			x: Math.random()*W, //X方向位置
			y: Math.random()*H, //Y方向
			r: 20,//雪花大小
			d: mp //雪花数量
		})
	}	
	//canvas雪花
	function draw(){
		ctx.clearRect(0, 0, W, H);//清除雪花路径
		ctx.fillStyle = "rgba(250, 235, 215, 0.7)";
		ctx.beginPath();
		for(var i = 0; i < mp; i++){
			var p = particles[i];
			ctx.moveTo(p.x, p.y);//雪花位置
			ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);//画出雪花
		}
		ctx.fill();
		update();
	}
	var angle = 0;
	function update(){//雪花运动
		angle += 0.01;
		for(var i = 0; i < mp; i++){
			var p = particles[i];
			p.y += 10;
		if(p.x > W || p.y > H){
				if(i > 0){
					particles[i] = {x: Math.random()*W, y: 0, r: 20, d: mp};
				}
			}
		}
	}
	setInterval(draw, 40);
}