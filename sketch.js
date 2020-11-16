var wall, car;
var speed, weight;
var deformation;

function setup() {

  speed = (random(5,90));
  weight = (random(75,1500))
  
  createCanvas(1600,400);
  wall = createSprite(800, 200, 60, 200);
  car = createSprite(200,200,15,15);

  car.velocityX = speed;
  car.shapeColor = color (255)
}

function draw() {
  background(0);  
  if (wall.x-car.x < (car.width+ wall.width)/2){
    car.velocityX = 0;
    deformation = (0.5 * weight * speed * speed)/2250

    if (deformation > 180){
      car.shapeColor=color(255,0,0)
    }
    if (deformation > 100 && deformation < 180){
      car.shapeColor = color(230,230,0)
    }
    if (deformation < 100){
      car.shapeColor = color(0,255,0)
    }
  }
  drawSprites();
}