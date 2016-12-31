function Bullet(angle){
  this.ixpoint = 410;
  this.iypoint = 400;
  this.x = [];
  this.y = [];
  this.range = 700;
  this.angle = angle;

  this.show = function(){
    fill(255,255,255);
    stroke(0,0,0,0);
      for(var i = 20; i < this.range; i++){
        fill(255,255-i/3,255-i);
        this.x[i] = sin(this.angle)*i+this.ixpoint;
        this.y[i] = cos(this.angle)*i+this.iypoint;
        rect(this.x[i], this.y[i], 1, 1);
      }
    //rect(this.ixpoint, this.iypoint, 1, 1);
  }
}
