var name = 'Liam Matthews Murray' //This declares the name variable 
var positionX = 100
var positionY = 0
var speedX = 10
var speedY = 5
var moving = true
var counter = 0

function setup() {
  createCanvas(400, 200)
}
function draw() { // The draw function contiunously executes the lines of code contained within its block. It is used typically for animations, in combination with incrementing variables that affect the shapes drawn.
  background(100) //  This variable controls the rgb colour of the canvas
  rect(positionX, positionY, 10, 10)
  if (moving) {
    positionX = positionX + speedX;
    positionY = positionY + speedY
    if (positionX >=400 || positionX <0) {
      speedX = -speedX
      counter ++
    }if (positionY >=200 || positionY <0) {
      speedY = -speedY
      counter ++
    } // the code in here only runs if `moving` is true
  }
    text('My name is ' + name, 10, 20)
    text('isMoving = ' + moving, 10, 40)
    text('counter = ' + counter, 10, 60)
    console.log(moving)
}
 function mousePressed() {
   moving = !moving
 }