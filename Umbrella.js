class Umbrella {
  constructor(x, y) {
    this.body = Bodies.circle(x, y - 30, 40, {
      isStatic: true
    });
    World.add(world, this.body);
    this.image = loadImage('images/Walking Frame/walking_1.png');
  }

  show() {
    image(this.image, this.body.position.x, this.body.position.y + 35, 200, 200);
    // ellipse(this.body.position.x, this.body.position.y, 40, 40);
  }

}