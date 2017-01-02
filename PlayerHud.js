function PlayerHud(){
  var status = new PlayerStatus();
  var proj = new Bullet(120);
  var aux = 1;

  this.refilAmmo = function(){
    status.ammo = 10;
  }

  this.shot = function(angle){
    if(status.ammo != 0){
      status.ammo--;
      aux = 3;
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
