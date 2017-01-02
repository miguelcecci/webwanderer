function GlobalMap(){

  this.xspeed = 0;
  this.yspeed = 0;
  this.sprint = 1;
  this.chunksize = 800;
  chunk = [];
  chunk[0] = new Chunk(-this.chunksize,-this.chunksize, this.chunksize);
  chunk[1] = new Chunk(0,-this.chunksize,this.chunksize);
  chunk[2] = new Chunk(this.chunksize,-this.chunksize,this.chunksize);
  chunk[3] = new Chunk(-this.chunksize,0,this.chunksize);
  chunk[4] = new Chunk(0,0,this.chunksize);
  chunk[5] = new Chunk(this.chunksize,0,this.chunksize);
  chunk[6] = new Chunk(-this.chunksize,this.chunksize,this.chunksize);
  chunk[7] = new Chunk(0,this.chunksize,this.chunksize);
  chunk[8] = new Chunk(this.chunksize,this.chunksize,this.chunksize);


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
    this.redistribution();
  }
  this.show = function(){
    for (var i = 0; i < 9; i++) {
      chunk[i].show();
    }
    for (var i = 0; i < 9; i++) {
      chunk[i].enemyShow();
    }
    // print("The value ---- " + chunk[5].getyposition()+ "-" + chunk[5].getxposition());
  }

  this.redistribution = function(){
    if(chunk[4].getyposition() >= 800 ){
      chunk[6] = chunk[3];
      chunk[7] = chunk[4];
      chunk[8] = chunk[5];
      chunk[4] = chunk[1];
      chunk[3] = chunk[0];
      chunk[5] = chunk[2];

      chunk[0] = new Chunk(chunk[3].getxposition(), -800, this.chunksize)
      chunk[1] = new Chunk(chunk[4].getxposition(), -800, this.chunksize)
      chunk[2] = new Chunk(chunk[5].getxposition(), -800, this.chunksize)
      this.show();
    }
  }
}
