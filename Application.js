class Application {
  
  

  constructor() {
    this.balls = [];
    this.sliderBallsNumber;
    this.buttonDraw;
  }

  init() {
    createCanvas(deltaI, deltaJ);
    initColors();
    frameRate(appFrameRate);
    this.initBalls();
    
    this.sliderBallsNumber = new Slider(20, deltaJ - blockHeight + 20, 500, 40, 10, 10, 10000, maxBallsNb,
    backGroundColor, lightBackGroundColor, strokeColor, hoverColor);
    this.sliderBallsNumber.init();
    
    this.buttonDraw = new Button(deltaI - 100, deltaJ - blockHeight + 20, 80, 40, "Reset", lightBackGroundColor, strokeColor, strokeColor, hoverColor, backGroundColor, true);
    this.buttonDraw.init();
  }
  
  initBalls() {
   this.balls = [];
   for (let i=0; i<maxBallsNb; i++) {
      let ballColor = calculateRVB(i, maxBallsNb, gradientStart, gradientRange);
      let ballToAdd = new Ball(radius, ballStrokeWidth, (int) (deltaI/2), (int) (deltaJ/2), ballColor, ballStrokeColor, true);
      this.balls.push(ballToAdd);
    } 
  }

  run() {
    noStroke();
    background(backGroundColor);
    this.balls.forEach(ball => {
      ball.drawBall();
      ball.moveRandomly();
    });
    this.drawFooter();
  }
  
  drawFooter() {
    if(showSettings) {
      this.showSettings();
      this.showGradient();
    }
    
  }
  
  showGradient() {
    for(let i=0; i<deltaI; i++) {
      noStroke();
      let colorToDraw = calculateRVB(i, deltaI, gradientStart, gradientRange);
      fill(colorToDraw);
      rect(i, deltaJ-5, 1, 5);
    }
  }
  
  showSettings() {
    noStroke();
    fill(lightBackGroundColor); // backGroundColor
    rect(0, deltaJ - blockHeight, deltaI, deltaJ);
    maxBallsNb = (int) (this.sliderBallsNumber.run());
    console.log(`maxBallsNb : ${maxBallsNb}`);
    noStroke();
    fill(textColor);
    textSize(12);
    text("Nb de balles : " + maxBallsNb, 540, deltaJ - blockHeight + 40);
    this.buttonDraw.drawButton();
    this.buttonDraw.run();
    if(this.buttonDraw.getIsClicked()) {
      this.initBalls();
      this.buttonDraw.setIsClicked(false)
    }
  }
}
