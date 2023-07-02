class Button {

  constructor(posI, posJ, sizeI, sizeJ, text, buttonBgColor, buttonStkColor, strokeColor, strokeColorMouseOver, colorDisabled, isEnabled) {
    this.posI = posI;
    this.posJ = posJ;
    this.sizeI = sizeI;
    this.sizeJ = sizeJ;
    this.text = text;
    this.buttonBgColor = buttonBgColor;
    this.bgColor = buttonBgColor;
    this.buttonStkColor = buttonStkColor;
    this.strokeColor = strokeColor;
    this.strokeColorMouseOver = strokeColorMouseOver;
    this.colorDisabled = colorDisabled;
    this.textColor = strokeColor;
    this.isEnabled = isEnabled;
    //this.valToReturn = false;
    //this.inside = false;
    //this.pressed = false;
    this.isClicked = false;
  }

  init() {
    //this.sliderStkColor = this.strokeColor;
  }

  drawButton() {
    strokeWeight(1);
    stroke(this.buttonStkColor);
    fill(this.buttonBgColor);
    rect(this.posI, this.posJ, this.sizeI, this.sizeJ, 8);
    textAlign(CENTER, CENTER);
    textSize(16);
    fill(this.textColor);
    noStroke();
    text(this.text, this.posI + this.sizeI/2, this.posJ + this.sizeJ/2);
    textAlign(LEFT);
    if (this.isEnabled) {
      this.textColor  = this.strokeColor;
    } else {
      this.textColor  = this.colorDisabled;
    }
  }

  run() {
    //print("run button");

    if (this.isEnabled) {
      //let valToReturn = null;

      //this.textColor  = this.strokeColor;
      if (mouseX > this.posI && mouseX < (this.posI + this.sizeI)) {
        if (mouseY > this.posJ && mouseY < (this.posJ + this.sizeJ)) {
          this.buttonStkColor = this.strokeColorMouseOver;
          this.textColor = this.strokeColorMouseOver;
          if (mouseIsPressed) { //  mouseIsPressed // mouseup // mouseClicked(change_background)
            this.isClicked = true;
            //this.valToReturn = true;
            this.buttonBgColor = this.strokeColorMouseOver;
            //this.isNotClicked = false;
          }
        }
      } else {
        this.buttonBgColor = this.bgColor;
        this.buttonStkColor = this.strokeColor;
        this.isClicked = false;
        //this.valToReturn = false;
        //this.isNotClicked = true;
      }
    } else {
      this.textColor  = this.colorDisabled;
      this.isClicked = false;
    }
    //return this.valToReturn;
  }

  setText(text) {
    this.text = text;
  }

  getText() {
    return this.text;
  }

  setIsEnabled(isEnabled) {
    this.isEnabled = isEnabled;
  }

  getIsEnabled() {
    return this.isEnabled;
  }
  
  setIsClicked(isClicked) {
    this.isClicked = isClicked;
  }

  getIsClicked() {
    return this.isClicked;
  }
/*
  setValToReturn(valToReturn) {
    this.valToReturn = valToReturn;
  }

  getValToReturn() {
    return this.valToReturn;
  }*/
}
