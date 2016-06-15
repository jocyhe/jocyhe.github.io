 var r_g_b; 
 
 var config = {
    apiKey: "AIzaSyDN8WQQUiR1cd-ypbsjrNIL3vUpti16LPc",
    authDomain: "collab-sketch-21480.firebaseapp.com",
    databaseURL: "https://collab-sketch-21480.firebaseio.com",
    storageBucket: "collab-sketch-21480.appspot.com",
  };
 firebase.initializeApp(config);
 
 var pointsData = firebase.database().ref();
 
 var points = [];
 
 function setup() {
    var canvas = createCanvas($(document).width(),$(document).height()-39);
    background(255);
    ColorPicker(
                    document.getElementById('slide'),
                    document.getElementById('picker'),
                    function(hex, hsv, rgb) {
                    r_g_b = hex;
                    })
    
    fill(212, 31, 2);
    
    strokeWeight(0);
    pointsData.on("child_added", function (point) {
        points.push(point.val()); 
    });
    canvas.mousePressed(drawPoint);
    canvas.mouseMoved(function() {
        if(mouseIsPressed) {
            drawPoint();
        }
    });
 }

 function draw() { 
    background(255);
    // document.getElementById("jscolor").style.backgroundColor.replace("rgb","fill");

    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        fill(point.color);
        ellipse(point.x,point.y, 5, 5);
    }
 }
 
 function drawPoint() {
    pointsData.push({x: mouseX, y: mouseY, color: r_g_b});
 }
 
 $("#saveDrawing").on("click", saveDrawing);
 
 function saveDrawing() {
     saveCanvas();
 }
 
 $("#clearDrawing").on("click", clearDrawing);
 
 function clearDrawing() {
     pointsData.remove();
     points = [];
 }
 
 
 
 
 
 
 