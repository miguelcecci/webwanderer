function Chunk(x, y){

  this.x = x;
  this.y = y;
  this.xspeed = 0;
  this.yspeed = 0;
  this.sprint = 1;
  this.ue = [];
  for (var i = 0; i < 8; i++) {
    this.ue[i] = new GroundEffects();
  }
  this.setsprint = function(spr){
    this.sprint = spr;
  }

  this.ysetspeed = function(ys){
    this.yspeed = ys;
  }
  this.xsetspeed = function(xs){
    this.xspeed = xs;
  }

  this.update = function(){
    this.x = this.x + this.xspeed*this.sprint;
    this.y = this.y + this.yspeed*this.sprint;
  }

  this.show = function(){
    fill(100,150,100);
    rect(this.x,this.y, 800, 800);
    for (var i = 0; i < 8; i++) {
      this.ue[i].show(this.xspeed*this.sprint, this.yspeed*this.sprint);
    }
  }
}
