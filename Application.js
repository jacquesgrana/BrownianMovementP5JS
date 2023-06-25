class Application {

  constructor() {
    this.balls = [];
  }

  init() {
    createCanvas(deltaI, deltaJ);
    initColors();
    frameRate(appFrameRate);
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
    for(let i=0; i<deltaI; i++) {
      noStroke();
      let colorToDraw = calculateRVB(i, deltaI, gradientStart, gradientRange);
      fill(colorToDraw);
      rect(i, deltaJ-10, 1, 10);
    }
  }
}
