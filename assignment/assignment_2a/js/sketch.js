console.log('Is this working?');

function setup(){
	createCanvas(500,500);
	noStroke();
	colorMode(HSB, 100);
		for (var i = 0; i < 100; i++) {
  			for (var j = 0; j < 100; j++) {
    	stroke(i, j, 100);
    	point(i, j);
  }
}
	print('Setup complete...');
}

function draw(){
	for (var i = 0; i < 50; i++){
		for (var j = 0; j < 50; j++){
			fill (i * 2.25, j * 2, 100);
			rect(i+ i * 10, j + j * 10, width, height);
			noStroke();
		}
	}
}