function PlayerHud(){
  var status = new PlayerStatus();
  var proj = new Bullet(120);
  var aux = 1;

  this.refilAmmo = function(){
    status.ammo = 10;
  }

  this.verifyShoot = function(x, y, size){
    if(aux != 0){
      for(var i = 20; i < proj.range; i++){
        if(proj.x[i] > x && proj.x[i] < x+size && proj.y[i] > y && proj.y[i] < y+size){
          score = score + 1000;
          return false;
        }
      }
    }
    return true;
  }

  this.shot = function(angle){
    if(status.ammo != 0){
      status.ammo--;
      aux = 2;
      proj = new Bullet(angle);
    }
  }

  this.show = function(){
    if(aux != 0){
      proj.show();
      aux--;
    }
    fill(0,0,255,100);
    rect(800,800,-10,-status.hydratation);
    fill(244,244,0,100);
    rect(800-10,800,-10,-status.energy);
    fill(24,2,0,100);
    rect(800-20,800,-10,-status.ammo*10);
  }
}
