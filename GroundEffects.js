function GroundEffects(){
  this.color = random(50, 100);
  this.x = random(5, 795);
  this.y = random(5, 795);
  this.size = random(10, 25);
  this.xspeed = 0;
  this.yspeed = 0;


  this.show = function(xs, ys){
    this.xspeed = xs;
    this.yspeed = ys;
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    fill(0,0,0,0+this.color);
    stroke(0,0,0,this.color);
    rect(this.x, this.y, this.size, this.size);
  }
}
