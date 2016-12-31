function PlayerHud(){
  var status = new PlayerStatus();

  this.shot = function(angle){
    status.shot(angle);
  }

  this.show = function(){
    status.show();
    fill(0,0,255,100);
    rect(800,800,-10,-status.hydratation);
    fill(244,244,0,100);
    rect(800-10,800,-10,-status.energy);
    fill(24,2,0,100);
    rect(800-20,800,-10,-status.ammo*10);
  }
}
