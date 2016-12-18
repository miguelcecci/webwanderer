function GlobalMap(){

  this.xspeed = 0;
  this.yspeed = 0;
  this.sprint = 1;
  chunk = [];
  chunk[0] = new Chunk(-800,-800);
  chunk[1] = new Chunk(0,-800);
  chunk[2] = new Chunk(800,-800);
  chunk[3] = new Chunk(-800,0);
  chunk[4] = new Chunk(0,0);
  chunk[5] = new Chunk(800,0);
  chunk[6] = new Chunk(-800,800);
  chunk[7] = new Chunk(0,800);
  chunk[8] = new Chunk(800,800);


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
    for (var i = 0; i < 9; i++) {
      chunk[i].update(this.xspeed, this.yspeed, this.sprint);
    }
  }
  this.show = function(){
    for (var i = 0; i < 9; i++) {
      chunk[i].show();
    }
  }
/*  this.redistribution = function(){
    if(chunk[5].getyposition == 400 ){
      chunk[7] = chunk[5];
      chunk[5] = chunk[1];
      chunk[1] = new Chunk(chunk[5].getxposition, -800)
    }
  }*/
}
