var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(480,600);
    circleDiameter = width/NUM_CIRCLES;
    circleRadius = circleDiameter/2;
}

function draw() {
    rVal = 159;
    gVal = 235;
    bVal = 186; 
    var isShifted = false;
    
    var y = height;
    while (y >= 0) { 
        
        var x; 
        
        if (isShifted) {
            x = circleRadius;
        } else {
            x = 0;
        }
        
        while (x <= width) {
            fill(color(rVal,gVal,bVal));
            stroke(color(150,200,50));
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }
    
    y = y - circleRadius;
    isShifted = !isShifted;
    
    rVal = rVal -2 ;
    gVal = gVal + 100;
    bVal = bVal + 10;
  }
}











