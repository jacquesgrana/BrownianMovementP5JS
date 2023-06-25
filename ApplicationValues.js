  var deltaI = window.innerWidth;
  var deltaJ = window.innerHeight;
  var radius = 1;
  var stepI = radius*2;
  var stepJ = radius*2;
  var deltaX = Math.round(deltaI/stepI);
  var deltaY = Math.round(deltaJ/stepJ);
  var maxBallsNb = 10000;
  var backGroundColor;
  var ballStrokeColor;
  var ballStrokeWidth = 0;
  var appFrameRate = 25;
  var gradientStart = 1;
  var gradientRange = 5;
  
  function initColors() {
     backGroundColor = color(0);
     ballStrokeColor = color(0); 
  }
