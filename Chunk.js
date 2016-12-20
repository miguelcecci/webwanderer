function Chunk(x, y, size){

  this.x = x;
  this.y = y;
  this.size = size;
  this.ue = [];
  for (var i = 0; i < 8; i++) {
    this.ue[i] = new GroundEffects(this.x, this.y);
  }

  this.getxposition = function(){
    return this.x;
  }
  this.getyposition = function(){
    return this.y;
  }

  this.update = function(xs, ys, sprint){
    this.x = this.x + xs*sprint;
    this.y = this.y + ys*sprint;
    for (var i = 0; i < 8; i++) {
      this.ue[i].update(xs, ys, sprint);
    }
  }

  this.show = function(){
    fill(100,150,100);
    stroke(100,150,100);
    rect(this.x,this.y, this.size, this.size);
    for (var i = 0; i < 8; i++) {
      this.ue[i].show();
    }
  }
}
