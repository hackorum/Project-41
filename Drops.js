class Drop {
  constructor(x, y) {
    this.body = Bodies.circle(x, y, 2, {
      isStatic: false,
      frictionAir: 0.05
    });
    World.add(world, this.body);
  }

  update() {
    if (this.body.position.y > height) {
      Body.setPosition(this.body, {
        x: random(width),
        y: 0
      })
    }
  }

  show() {
    noStroke();
    ellipse(this.body.position.x, this.body.position.y, 2, 2);
  }

}