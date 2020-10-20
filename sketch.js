const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine = Matter.Engine;
const World = Matter.World;

var engine, world, umbrella;
var drops = [];
var counter = 0;

function preload() {
  thun1 = loadImage('images/thunderbolt/1.png');
  thun2 = loadImage('images/thunderbolt/2.png');
  thun3 = loadImage('images/thunderbolt/3.png');
  thun4 = loadImage('images/thunderbolt/4.png');
  batImg = loadImage('images/bat.png');
}

function setup() {
  createCanvas(400, 800);

  engine = Engine.create();
  world = engine.world;

  umbrella = new Umbrella(200, 700);

  ellipseMode(RADIUS);
  imageMode(CENTER);
  fill("lightblue")

  Engine.run(engine);
}

function draw() {
  background(0);

  umbrella.show();

  spawnDrops();

  for (let i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].update();
  }

  image(batImg, 90, height - 50, 100, 100);

  thunder();

  drawSprites();
}

function spawnDrops() {
  if (frameCount % 1 === 0 && counter < 100) {
    drops.push(new Drop(random(width), 0));
    counter++;
  }
}

function thunder() {
  if (frameCount % floor(random(300)) === 0) {
    var thun = createSprite(width / 2, 100);
    thun.scale = 0.5;
    var num = floor(random(4));
    switch (num) {
      case 0: thun.addImage(thun1);
        break;
      case 1: thun.addImage(thun2);
        break;
      case 2: thun.addImage(thun3);
        break;
      case 3: thun.addImage(thun4);
        break;
      default: break;
    }
    thun.lifetime = 1;
  }
}