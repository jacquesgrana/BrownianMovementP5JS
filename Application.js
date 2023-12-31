/**
Classe principale de l'application
*/
class Application {
  
  /**
  contructeur
  balls : tableau des balles qui sont affichées ([Ball])
  sliderBallsNumber : Slider qui détermine le nombre de balles présentes dans le tableau (Slider)
  buttonDraw : Button qui reset le tableau (Button)
  */
  constructor() {
    this.balls = [];
    this.sliderBallsNumber;
    this.buttonDraw;
  }

  /**
  Procédure d'initialisation
  */
  init() {
    createCanvas(deltaI, deltaJ);
    initColors();
    frameRate(appFrameRate);
    this.initBalls();
    this.sliderBallsNumber = new Slider(20, deltaJ - blockHeight + 20, 20 + deltaI - 360, 40, 10, 10, 10000, maxBallsNb,
    lightBackGroundColor, lightBackGroundColor, strokeColor, hoverColor);
    this.sliderBallsNumber.init();
    this.buttonDraw = new Button(deltaI - 120, deltaJ - blockHeight + 20, 100, 40, "Appliquer", lightBackGroundColor, strokeColor, strokeColor, hoverColor, backGroundColor, true);
  }
  
  /**
  Procédure qui efface et rempli le tableau de balles
  */
  initBalls() {
   this.balls = [];
   for (let i=0; i<maxBallsNb; i++) {
      let ballColor = calculateRVB(i, maxBallsNb, gradientStart, gradientRange);
      let ballToAdd = new Ball(radius, ballStrokeWidth, (int) (deltaI/2), (int) (deltaJ/2), ballColor, ballStrokeColor, true);
      this.balls.push(ballToAdd);
    } 
  }

  /**
  Procédure qui démarre l'application
  */
  run() {
    noStroke();
    background(backGroundColor);
    this.balls.forEach(ball => {
      ball.drawBall();
      ball.moveRandomly();
    });
    this.drawFooter();
    this.showHelp();
  }
  
  /**
  Procédure qui affiche le footer des settings
  */
  drawFooter() {
    if(showSettings) {
      this.showSettings();
      this.showGradient();
    }
    
  }
  
  /**
  Procédure qui dessine le dégradé des couleurs possibles des balles
  */
  showGradient() {
    for(let i=0; i<deltaI; i++) {
      noStroke();
      let colorToDraw = calculateRVB(i, deltaI, gradientStart, gradientRange);
      fill(colorToDraw);
      rect(i, deltaJ-5, 1, 5);
    }
  }
  
  /**
  Procédure qui affiche la fenêtre des settings
  */
  showSettings() {
    noStroke();
    fill(lightBackGroundColor); // backGroundColor
    rect(0, deltaJ - blockHeight, deltaI, deltaJ);
    this.sliderBallsNumber.drawSlider();
    maxBallsNb = (int) (this.sliderBallsNumber.run());
    console.log(`maxBallsNb : ${maxBallsNb}`);
    noStroke();
    fill(textColor);
    textSize(12);
    text("Nb de particules : " + maxBallsNb, deltaI - 300, deltaJ - blockHeight + 40);
    this.buttonDraw.drawButton();
    this.buttonDraw.run();
    if(this.buttonDraw.getIsClicked()) {
      this.initBalls();
      this.buttonDraw.setIsClicked(false)
    }
  }
  
  /**
  Procédure qui affiche le texte de l'aide
  */
  showHelp() {
    if(showHelp) {
      noStroke();
      fill(textColor);
      textSize(12);
      text("Settings : [S ou s] / Aide : [H ou h]", 20, deltaJ - 40);
      text("Application qui simule le mouvement brownien de particules qui sont colorées suivant leur ordre d'apparition.", 20, deltaJ - 20);
    }
  }
}
