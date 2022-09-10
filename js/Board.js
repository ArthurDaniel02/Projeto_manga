class Board {
  constructor(x, y, width, height) {
   
    this.x = x
    this.y = y
    //this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/árvore.png");

   // World.add(world, this.body);
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}
