var map;
var jack;

function setup() {
  createCanvas(800, 800);
  xw=windowWidth;
  yw=windowHeight;
  map = new GlobalMap();
  jack = new Player();
}

function draw() {
  background(255,0,0);
  fill(100,150,100);
  map.update();
  map.show();
  jack.show();

}
function keyPressed(){
  if(keyCode === UP_ARROW){
    map.ysetspeed(2);
  }else if (keyCode === DOWN_ARROW) {
    map.ysetspeed(-2);
  }

  if (keyCode === RIGHT_ARROW) {
    map.xsetspeed(-2);
  }else if (keyCode === LEFT_ARROW) {
    map.xsetspeed(2);
  }

  if (keyCode == SHIFT){
    map.setsprint(2);
  }
}
function keyReleased(){
  if(keyCode === UP_ARROW){
    map.ysetspeed(0);
  }else if (keyCode === DOWN_ARROW) {
    map.ysetspeed(0);
  }

  if (keyCode === RIGHT_ARROW) {
    map.xsetspeed(0);
  }else if (keyCode === LEFT_ARROW) {
    map.xsetspeed(0);
  }

  if (keyCode == SHIFT){
    map.setsprint(1);
  }
}
