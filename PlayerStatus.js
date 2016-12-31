function PlayerStatus(){
  this.energy = 100;
  this.hydratation = 100;
  this.ammo = 10;
  var proj = new Bullet(120);
  var aux = 1;

  this.show = function(){
    if(aux != 0){
      proj.show();
      aux--;
    }
  }

  this.shot = function(angle){
    if(this.ammo != 0){
      this.ammo--;
      aux = 3;
      proj = new Bullet(angle);
    }
  }

}
//em construçao...
