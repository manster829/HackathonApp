function Obstacle(){

this.x = 2000 + random(300);
this.y = Terrain.y;
this.Tspeed = 10;
this.meme = 50 + random(100);
  this.show = function() {
     fill(255);
     triangle(this.x, this.y, this.x + 25, this.y - this.meme, this.x + 50, this.y);
   }

   this.update = function(){

     this.x -= this.Tspeed;

   }
   this.hits = function(Instance) {
     if (Instance.y > this.y - 60) {
     if (Instance.x > this.x && Instance.x < this.x + 50) {
         //this.highlight = true;
         return true;
       }
     }
    // this.highlight = false;
     return false;
   }



   this.offscreen = function() {
   if (this.x < 0) {
     return true;
   } else {
     return false;
   }

}
}
