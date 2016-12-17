var chunk;
var jack;

function setup() {
  createCanvas(800, 800);
  xw=windowWidth;
  yw=windowHeight;
  chunk = new Chunk(0,0);
  jack = new Player();
}

function draw() {
  background(255,0,0);
  fill(100,150,100);
  chunk.update();
  chunk.show();
  jack.show();

}
function keyPressed(){
  if(keyCode === UP_ARROW){
    chunk.ysetspeed(2);
  }else if (keyCode === DOWN_ARROW) {
    chunk.ysetspeed(-2);
  }

  if (keyCode === RIGHT_ARROW) {
    chunk.xsetspeed(-2);
  }else if (keyCode === LEFT_ARROW) {
    chunk.xsetspeed(2);
  }

  if (keyCode == SHIFT){
    chunk.setsprint(2);
  }
}
function keyReleased(){
  if(keyCode === UP_ARROW){
    chunk.ysetspeed(0);
  }else if (keyCode === DOWN_ARROW) {
    chunk.ysetspeed(0);
  }

  if (keyCode === RIGHT_ARROW) {
    chunk.xsetspeed(0);
  }else if (keyCode === LEFT_ARROW) {
    chunk.xsetspeed(0);
  }

  if (keyCode == SHIFT){
    chunk.setsprint(1);
  }
}
