var numberOfRows = 10;
var numberOfColumns = 10;
var numberOfStrands = 2;
var maxCircleSize = 15;
var phase = 0;
var speed = 0.02;

function setup(){
	createCanvas(500, 500);
	noStroke();
  	colorA = color(253, 174, 120);
 	colorB = color(226, 129, 161);
}

function draw(){
	background(4, 58, 74);

  	for (var strand = 0; strand < numberOfStrands; strand++) {
	  	for (var row = 0; row < numberOfRows; row++) {
	  		for (var col = 0; col < numberOfColumns; col++) {
	  			var strandPhase = phase + map(strand, 0, numberOfStrands, 0, TWO_PI);
	  			
	  			var colOffset = map(col, 0, numberOfColumns, 0, TWO_PI);
		  		var x = map(col, 0, numberOfColumns, 50, width - 50);
		  		var y = height / 2 + row * 15 + sin(strandPhase + colOffset) * 50;
				
				var sizeOffset = (cos(strandPhase - (row / numberOfRows) + colOffset) + 1) * 0.5;

  				var circleSize = sizeOffset * maxCircleSize;
				
	  			fill(lerpColor(colorA, colorB, row / numberOfRows));
				ellipse(x, y, circleSize, circleSize)
	  		}
	  	}
	}
	phase = frameCount * speed;
}