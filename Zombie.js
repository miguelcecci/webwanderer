function Zombie(x,y){
  this.color = random(10, 50);
  this.x = x+random(5, 795);
  this.y = y+random(5, 795);
  this.size = random(15, 35);
  this.xspeed = 0;
  this.yspeed = 0;

  this.update = function(xs, ys, sprint){
    this.xspeed = xs*sprint;
    this.yspeed = ys*sprint;
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    if(this.x < 400){
      this.x = this.x + random(-2,4);
    }else{
      this.x = this.x - random(-2,4);
    }
    if(this.y < 400){
      this.y = this.y + random(-2,4);
    }else{
      this.y = this.y - random(-2,4);
    }
  }


  this.show = function(xs, ys){
    fill(140,0,this.color);
    stroke(0,0,0,0+this.color);
    rect(this.x, this.y, this.size, this.size);
  }
}
