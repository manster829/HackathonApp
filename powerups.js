function PwrUp(){
  this.x = 2000 + random(600);
  this.y = 600 - random(400);
  this.Tspeed = 10;
  this.meme = random(50);
  this.r = 32 + this.meme;

  this.show = function(){
    fill('red');
    ellipse(this.x, this.y, this.r , this.r);

  }

  this.update = function(){
    this.x -= this.Tspeed;


  }

  this.hits = function(Instance){
    if (Instance.y > this.y - this.r +32 && Instance.y < this.y + this.r -32) {
    if (Instance.x > this.x - this.r + 32 && Instance.x < this.x + this.r - 32) {
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
