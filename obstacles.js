function Obstacle(){

this.x = 2000 + random(300);
this.y = Terrain.y;
this.Tspeed = 10;
this.meme = 65 + random(100);
this.q=int(random(0,255));
this.g=int(random(0,255));
this.b=int(random(0,255));

  this.show = function() {
    fill(this.q,this.g,this.b);
     triangle(this.x, this.y, this.x + 25, this.y - this.meme, this.x + 50, this.y);
     triangle(this.x, 0, this.x + 25, 0 + this.meme, this.x + 50, 0);

   }

   this.update = function(){

     this.x -= this.Tspeed;

   }
   this.hits = function(Instance) {
     if (Instance.y > this.y - 60 || Instance.y < 0 + this.meme ) {

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
