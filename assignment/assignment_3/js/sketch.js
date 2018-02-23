//** Global variables **//
var vacantLots;
var startX = 50;
var endX = 950;
var startY = 900;
var endY = 50;
var startBlock = 11;
var endBlock = 1069;
var startArea = 8; 
var endArea = 924750; 

function preload() { 
	vacantLots = loadTable('data/vacantlotsdata.csv', 'csv', 'header');
	console.log('Table has been loaded...');
}

function setup(){
	createCanvas(1000, 1000);
	textFont('Helvetica');
	print(vacantLots.getColumnCount()+'column count');
	print(vacantLots.getRowCount()+ 'row loaded');
	noLoop(); //draw background once; recommended for static graphs//
}

function draw(){
	background(255);
	text('BLOCK NUMBER (X-AXIS) vs. LOT AREA (Y-AXIS)', 375, 950);
	noStroke();
	for (var i = 0; i < vacantLots.getRowCount(); i++){
		var block = vacantLots.getNum(i, 'Block'); 
		var area = vacantLots.getNum(i, 'Area');
		var positionX = map(block, startBlock, endBlock, startX, endX);  
		var positionY = map(area, startArea, endArea, startY, endY);
		var neighborhood = vacantLots.getString(i, 'Neighborhood');
			if (neighborhood == 'Chinatown'){
				fill (170, 170, 170, 80);
				//blue-grey
			}
			else if (neighborhood == 'Battery Park City') {
				fill (70, 178, 157, 80);
				//seafoam green 
			}
			else if (neighborhood == 'East Village') {
				fill (227, 123, 64, 80);
				//orange
			}
			else if (neighborhood == 'Gramercy') {
				fill (11, 135, 125, 80);
				//turquoise
			}

			else if (neighborhood == 'HudsonYards Chelsea Flatiron UnionSquare') {
				fill (245, 56, 85, 80);
				//salmon
			} 

			else if (neighborhood == 'LowerEastSide') {
				fill (84, 0, 50, 80);
				//purple
			}

			else if (neighborhood == 'MurrayHill KipsBay') {
				fill (3, 23, 39, 80);
				//dark blue
			}

			else if (neighborhood == 'SoHo Tribeca CivicCenter LittleItaly') {
				fill (136, 249, 212, 80);
				//light green
			}

			else {
				fill (240, 202, 77, 80);
				//yellow
			}

		ellipse(positionX, positionY, 8, 8);
	}
}





	//for (var i = 0; i < 11; i++) {
    //noStroke();
    //textAlign(LEFT, CENTER);
    //text(i, textLeft, map(i, 0, 10, endY, startY));
    //stroke(200);
    //line(textLeft + 10, map(i, 0, 10, endY, startY), rightX + 10, map(i, 0, 10, endY, startY));
  	//}


	//insert text for block number (x-axis)
	//for (var i = 0; i < block.length; i++){
		//text(block[i], 100, 45 + 20 * i);

	//}
	//insert text for lot area size (y-axis)
	//for (var i = 0; i < area.length; i++){
		//text(block[i], 650, 45 + 20 * i);
	//}






	


 	// ADD COLOR FOR NEIGHBORHOOD 

	//var neighborhood = vacantLots.getString(i, 'neighborhood');
	//if (neighborhood = Chelsea){
	//	fill (100);
	//	noStroke();
	//}
	//else if (){
	//	fill ();
	//	noStroke();
	//}
	//else {
	//	fill (50);
	//	noStroke();
	//}


