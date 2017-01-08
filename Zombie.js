function Zombie(x,y){
  this.color = random(10, 50);
  this.x = x+random(5, 795);
  this.y = y+random(5, 795);
  this.size = 30;
  this.xspeed = 0;
  this.yspeed = 0;
  this.alive = true;

  this.update = function(xs, ys, sprint){
    if(this.alive){
      this.alive = hud.verifyShoot(this.x, this.y, this.size);
      if(this.y<400 && this.y>370 && this.x<400 && this.x>370){
        game = false;
      }
      this.xspeed = xs*sprint;
      this.yspeed = ys*sprint;
      this.x = this.x + this.xspeed;
      this.y = this.y + this.yspeed;
      if(this.x < 400){
        this.x = this.x + random(-1,7) - (-this.x + 400)/200;
      }else{
        this.x = this.x - random(-1,7) + (this.x - 400)/200;
      }
      if(this.y < 400){
        this.y = this.y + random(-1,7) - (-this.y + 400)/200;
      }else{
        this.y = this.y - random(-1,7) + (this.y - 400)/200;
      }
    }
  }


  this.show = function(xs, ys){
    if(this.alive){
      fill(140,0,this.color);
      stroke(0,0,0,0+this.color);
      rect(this.x, this.y, this.size, this.size);
    }
  }
}
