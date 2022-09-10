class PlayerArcher {
  constructor(x, y, width, height) {
    const options = {
      isStatic: true
    };

    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.collapse = false;
    this.image = loadImage("./assets/mão.png");

    World.add(world, this.body);

    Matter.Body.setAngle(this.body, -30); // -90 degree
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    console.log(angle)
    if (keyIsDown(DOWN_ARROW) && angle <= -30 ) {
     
      angle += 1;
      Matter.Body.setAngle(this.body, angle);
    }

    if (keyIsDown(UP_ARROW) && angle >= -50 ) { 
      angle -= 1;
      Matter.Body.setAngle(this.body, angle);
    }

    push();
    translate(pos.x - 60, pos.y - 60);
    rotate(angle);
    
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
