function Runner(){
  this.x = 164;
  this.y = height/2;
  this.gravity = 1.2 ;
  this.velocity = 10;
  this.jumph = 50;



  this.show = function() {
   fill('green');
   ellipse(this.x, this.y, 32, 32);
 }

 this.update = function(){
   this.velocity += this.gravity;
   this.velocity *= 0.9;
   this.y += this.velocity;
   if (this.y > Terrain.y - 10) {
      this.y = Terrain.y - 10;
      this.velocity = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
      //this.jumph =0;
     }

 }
  this.jump = function(){

    this.velocity -= this.jumph;
}
}
