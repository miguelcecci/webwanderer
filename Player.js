function Player(){
  this.x = 400;
  this.y = 400;
  this.fat = 10;
  this.shoulder = 20;
  this.head = 8;
  this.leganimation = 0;

  this.show = function(){
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

    rect(this.x-this.shoulder/2,this.y-this.fat/2, this.shoulder, this.fat);
    fill(200,210,120);
    stroke(200,210,120);
    rect(this.x-this.head/2,this.y-this.fat/2-this.head/2, this.head, this.head);
    fill(70,40,0);
    stroke(70,40,0);
    rect(this.x-this.head/2,2+this.y-this.fat/2-this.head/2, this.head, this.head);
  }
}
