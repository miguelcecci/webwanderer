function GroundEffects(x, y){
  this.color = random(50, 100);
  this.x = x+random(5, 795);
  this.y = y+random(5, 795);
  this.size = random(2, 15);
  this.xspeed = 0;
  this.yspeed = 0;

  this.update = function(xs, ys, sprint){
    this.xspeed = xs*sprint;
    this.yspeed = ys*sprint;
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }


  this.show = function(xs, ys){
    fill(0,0,0,0+this.color);
    stroke(0,0,0,0+this.color);
    rect(this.x, this.y, this.size, this.size);
  }
}
