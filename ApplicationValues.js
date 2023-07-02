  var deltaI = window.innerWidth;
  var deltaJ = window.innerHeight;
  var radius = 2;
  var stepI = radius*2;
  var stepJ = radius*2;
  var deltaX = Math.round(deltaI/stepI);
  var deltaY = Math.round(deltaJ/stepJ);
  var maxBallsNb = 1000;
  var backGroundColor;
  var ballStrokeColor;
  var ballStrokeWidth = 0;
  var appFrameRate = 15;
  var gradientStart = 1;
  var gradientRange = 5;
  
  var showHelp = true;
  var showSettings = false;
  
  var blockHeight = 90;
  
  function initColors() {
     backGroundColor = color(0);
     ballStrokeColor = color(0);
     lightBackGroundColor = color(50,50,50);
     hoverColor = color(200,100,0);
     strokeColor = color(150,150,150);
     textColor = color(240,240,240);
  }
