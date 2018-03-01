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
	//noLoop(); //draw background once; recommended for static graphs//
}

function draw(){
	background(255);
	fill(0,0,0);
	text('BLOCK NUMBER (X-AXIS) vs. LOT AREA (Y-AXIS)', 375, 950);
	noStroke();
	for (var i = 0; i < vacantLots.getRowCount(); i++){
		var block = vacantLots.getNum(i, 'Block'); 
		var area = vacantLots.getNum(i, 'Area');
		var bldgclass = vacantLots.getString(i, 'bldgclass');
		var positionX = map(block, startBlock, endBlock, startX, endX);  
		var positionY = map(area, startArea, endArea, startY, endY);
		var neighborhood = vacantLots.getString(i, 'Neighborhood');
			if (neighborhood == 'Chinatown'){
				fill (130, 130, 130, 90);
			}
			else if (neighborhood == 'Battery Park City') {
				fill (70, 178, 157, 90);
			}
			else if (neighborhood == 'East Village') {
				fill (146, 214, 195, 90);
			}
			else if (neighborhood == 'Gramercy') {
				fill (19, 96, 74, 90);
			}
			else if (neighborhood == 'HudsonYards Chelsea Flatiron UnionSquare') {
				fill (219, 49, 70, 90);
			} 
			else if (neighborhood == 'LowerEastSide') {
				fill (92,96, 161, 90);
			}
			else if (neighborhood == 'MurrayHill KipsBay') {
				fill (4, 227, 229, 90);
			}
			else if (neighborhood == 'SoHo Tribeca CivicCenter LittleItaly') {
				fill (7, 166, 212, 90);
			}
			else {
				fill (240, 160, 7, 90);
			}
		ellipse(positionX, positionY, 8, 8);
		var d = int(dist(mouseX, mouseY, positionX, positionY));
			if (d < 8){
				text('NEIGHBORHOOD:', 50, 500);
				text(neighborhood, 175, 500);
				text('BLOCK NUMBER:', 50, 515);
				text(block, 175, 515);
				text('LOT AREA (SF):', 50, 530);
				text(area, 175, 530);
				text('BLDG CLASS:', 50, 545);
				text(bldgclass, 175, 545);
				noStroke();
			}
	}
}






