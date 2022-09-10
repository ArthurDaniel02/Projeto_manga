class Player {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/Minino.png");

    
  }

  display() {
    
    push();
    
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}
