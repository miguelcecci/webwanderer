function Player(){
  //visuals
  this.x = 400;
  this.y = 400;
  this.fat = 10;
  this.shoulder = 20;
  this.head = 8;
  this.leganimation = 0;

  //look angle
  this.angle = 210;
  this.rotation = 0;
  this.range = 400;

  this.turn = function(value){
    this.rotation = value;
  }

  this.getAngle = function(){
    return this.angle;
  }

  this.update = function(){
    if(this.angle > 360){
      this.angle = 0;
    }
    if(this.angle < 0){
      this.angle = 360;
    }
    this.angle = this.angle + this.rotation/12;
  }


  this.show = function(){
    this.update();

    stroke(0,0,0,0);
    // fill(255,100,100,30);
    // for (var i = 0; i < this.range; i++) {
      // rect(sin(this.angle)*i+this.x+8, cos(this.angle)*i+this.y, 2, 2);
    // }
    // fill(255,100,100);
    // rect(sin(this.angle)*this.range+this.x+8, cos(this.angle)*300+this.y, 2, 2);


    fill(190,210,210);
    stroke(190,210,210);

    if(map.xspeed != 0 || map.yspeed != 0){
        if(this.leganimation <= 20){
          rect(400,400,7,10);
          rect(400-7,390,7,10);
        }else if (this.leganimation <= 40){
          rect(400-7,400,7,10);
          rect(400,390,7,10);
        }else{
          this.leganimation = 0;
        }
        this.leganimation++;
      }
      for (var i = 0; i < 20; i++) {
        rect(sin(this.angle)*i+this.x+8, cos(this.angle)*i+this.y, 4, 4);
      }


    rect(this.x-this.shoulder/2,this.y-this.fat/2, this.shoulder, this.fat);
    fill(200,210,120);
    fill(70,40,0);
    stroke(70,40,0);
    rect(this.x-this.head/2,this.y-this.fat/2-this.head/2, this.head, this.head);
    rect(this.x-this.head/2,2+this.y-this.fat/2-this.head/2, this.head, this.head);

    //draw the weapon
    fill(70,70,70);
    stroke(70,40,0,0);
    for (var i = 20; i < 29; i++){
      rect(sin(this.angle)*i+this.x+8, cos(this.angle)*i+this.y, 4, 4);
    }
  }
}
