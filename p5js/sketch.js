var mouseX;
var mouseY;
let sound;
let ellipseX;
let ellipseY;
const ellipseDiameter = 50;
const speed = 8; 

let meow; 
let hoverAreaX = 1200; 
let hoverAreaY = 500; 
let hoverAreaWidth = 30; 
let hoverAreaHeight = 30; 
let isHovering = false; 
let backgroundImage;
let backgroundImage2;
function preload(){
  sound = loadSound('../media/audio/Lion roar.wav');
  meow = loadSound('../media/audio/yippee-tbh.mp3');
  backgroundImage = loadImage('../media/images/dance.jpeg');
  backgroundImage2 = loadImage('../media/images/cathead.jpeg')
}
function setup() {
    bg = loadImage('../media/images/catbak.jpeg');
    createCanvas(windowWidth, windowHeight);
    back = loadImage('../media/images/dance.jpeg')
    roar = loadImage('../media/images/cathead.jpeg')
    ellipseX = random(width);
    ellipseY = random(height);
  
  }

  function draw() {
    background(bg);
    if (isHovering) {
    background(back);
    } else {
      background(bg);
    }




let direction = createVector(mouseX - ellipseX, mouseY - ellipseY);
direction.normalize(); 

if(!isHovering){
ellipseX += direction.x * speed;
ellipseY += direction.y * speed;


ellipseX = constrain(ellipseX, ellipseDiameter / 2, width - ellipseDiameter / 2);
ellipseY = constrain(ellipseY, ellipseDiameter / 2, height - ellipseDiameter / 2);

 
 let distance = dist(ellipseX, ellipseY, mouseX, mouseY);


 if (distance < ellipseDiameter / 2) {
  background(roar);
  if (!sound.isPlaying()) {
     sound.play();
   }
 }
}

ellipse(ellipseX, ellipseY, ellipseDiameter, ellipseDiameter);


if (
  mouseX >= hoverAreaX &&
  mouseX <= hoverAreaX + hoverAreaWidth &&
  mouseY >= hoverAreaY &&
  mouseY <= hoverAreaY + hoverAreaHeight
) {
  if (!isHovering) {
    
    meow.play();
    isHovering = true;
  }
} else {
  
  isHovering = false;
}


fill("black");
rect(hoverAreaX, hoverAreaY, hoverAreaWidth, hoverAreaHeight);


    beginShape();
    fill("black")
    ellipse(ellipseX+12,ellipseY-60,30,50)
    ellipse(ellipseX+40,ellipseY-40,30,50)
   ellipse(ellipseX-12,ellipseY-60,30,50)
   ellipse(ellipseX-40,ellipseY-40,30,50)
    ellipse(ellipseX,ellipseY,80,80);
  
    endShape(CLOSE);
   
    if (mouseIsPressed === true) {
beginShape();
vertex(489,82);
vertex(427,40);
vertex(443,63);
vertex(439,82);
vertex(446,109);
endShape(CLOSE);
      beginShape();
        vertex(180,82);
      vertex(207,36);
      vertex(214,63);
      vertex(219,82);
      vertex(226,109);
      endShape(CLOSE);
      ellipse(350, 250, 80, 50);
      ellipse(250,150,30,60);
      ellipse(430,150,30,60);
  
    } 

  
    }