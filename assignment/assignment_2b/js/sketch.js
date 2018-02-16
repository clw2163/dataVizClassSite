console.log('Is this working test test?');

function setup(){
	createCanvas(500,500);
	print('Setup complete...');
	colorMode(HSB, 100);
	noStroke();
}

function draw(){
	background(0, 0, 100);
	for (var i = 0; i < 20; i++){
		for (var j = 0; j < 20; j++){
			var d = int(dist(mouseX, mouseY, 20 + i * 24, 20 + j * 24));

			if (d < 50){
				fill (0);
				noStroke();
			}
			else {
				fill ((d * 50) / 500);
				noStroke();
			}

			if (d > 1000) {
				ellipse(20 + i * 24, 20 + j * 24, 20, 20);
			}
			else if (d < 5 & d > 4){
				ellipse(20 + i * 24, 20 + j * 24, 5, 5);
			}
			else {
				ellipse(20 + i * 24, 20 + j * 24, d/25, d/25);
			}


			


			// if (d < 20) {
			// 	ellipse(20 + i * 24, 20 + j * 24, 10, 10);
			// }
			// else if (d < 1000 & d > 19){
			// 	ellipse(20+ i * 24, 20 + j * 24, d/25, d/25);
			// 		//small circle/	
			// }
			// else {
			// 	ellipse(20+ i * 24, 20 + j * 24, 40, 40);
			// 		//big circle/	
			// }	
			// if (d < 50){
			// 	fill (100);
			// }
			// else {
			// 	fill ((d * 50) / 500);
			// }

		}
	}
}