function GroundItens(x, y){
  this.categorie = random(1,4);
  this.x = x+random(15, 785);
  this.y = y+random(15, 785);
  this.size = 15;
  this.xspeed = 0;
  this.yspeed = 0;
  this.taken = true;

  this.verifyColision = function(){
    if (this.x > 370 && this.x < 410 && this.y > 370 && this.y < 410) {
        if(this.taken){
          hud.refilAmmo();
        }
        this.taken = false;
    }
  }

  this.update = function(xs, ys, sprint){
    this.xspeed = xs*sprint;
    this.yspeed = ys*sprint;
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  this.show = function(){
    this.verifyColision();
    if(this.taken){
      fill(this.categorie*50);
      stroke(this.categorie);
      rect(this.x, this.y, this.size, this.size);
    }
  }
}
