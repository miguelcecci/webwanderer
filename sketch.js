var map;
var jack;
var hud;
var game = true;
var score = 0;
var auxx = 0;

function setup() {
  createCanvas(800, 800);
  xw=windowWidth;
  yw=windowHeight;
  map = new GlobalMap();
  jack = new Player();
  hud = new PlayerHud();
}

function draw() {
  if(game){
    map.update();
    background(100,150,100);
    fill(100,150,100);
    map.show();
    jack.show();
    hud.show();
  }else{
    background(random(1,30));
    if(auxx == 2){
      fill(200);
      text(score,390,390);
      auxx = 0;
    }
    auxx++;
  }

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
  if (keyCode == 65){
    jack.turn(1);
  }
  if (keyCode == 83){
    jack.turn(-1);
  }
  if (keyCode == 68){
    hud.shot(jack.getAngle());
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

  if (keyCode == 65){
    jack.turn(0);
  }
  if (keyCode == 83){
    jack.turn(0);
  }
}
