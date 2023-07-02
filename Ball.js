/**
Classe  qui représente l'objet Ball
*/
class Ball {
  
  /**
  Constructeur
  radius : rayon de la balle en pixel
  strokeWidth : épaisseur du contour de la balle en pixel
  posI : position horizontale dans la fenêtre en pixel
  posJ :  position verticale dans la fenêtre en pixel
  fillColor : couleur de remplissage de la balle (objet color)
  strokeColor : couleur du contour de la balle (objet color)
  isToDraw : vrai si la balle doit être dessinée, faux sinon
  */
  constructor(radius, strokeWidth, posI, posJ, fillColor, strokeColor, isToDraw) {
    this.radius = radius;
    this.strokeWidth = strokeWidth;
    this.posI = posI;
    this.posJ = posJ;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.isToDraw = isToDraw;
  }

  /**
  Méthode qui affiche la balle selon ses attributs.
  */
  drawBall() {
    if (this.isToDraw) {
      strokeWeight(this.strokeWidth);
      fill(this.fillColor);
      stroke(this.strokeColor);
      ellipse(this.posI, this.posJ, this.radius*2, this.radius*2);
    }
  }

  /**
  Méthode qui modifie les coordonnées de la balle de manière aléatoire dans les 8 directions possibles.
  */
  moveRandomly() {
    let newDir = (int) (random(8));
    switch(newDir) {
    case 0 :
      this.posI -= stepI;
      break;
    case 1 :
      this.posI -= stepI;
      this.posJ += stepJ;
      break;
    case 2 :
      this.posJ += stepJ;
      break;
    case 3 :
      this.posI += stepI;
      this.posJ += stepJ;
      break;
    case 4 :
      this.posI += stepI;
      break;
    case 5 :
      this.posI += stepI;
      this.posJ -= stepJ;
      break;
    case 6 :
      this.posJ -= stepJ;
      break;
    case 7 :
      this.posI -= stepI;
      this.posJ -= stepJ;
      break;
    }
  }
}
