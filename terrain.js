function Terrain(){
this.x = 0;
this.y = 800;
this.Tspeed = 15;
this.show = function() {
   fill(255);
   rect(this.x, this.y, window.innerWidth, 10);
 }

 this.update = function(){

   this.x -= this.Tspeed;
 }



}
