var canvas;
var obstacles = [];
var Sobstacles = [];
var Score = 0;
var TopScore = 0;
var Gmo = false;
var diffMult;
var x = document.getElementById("myBtn");

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  Instance = new Runner();
  Terrain = new Terrain();
  SpeedBoost = new PwrUp();
//  Triangle = new Obstacle();
  obstacles.push(new Obstacle());
  Sobstacles.push(new SkyObj());
}



function GameOver(){
  //setup();
  Score = 0;
  canvas.clear();
}

/*function GameOver(){
Gmo = true;
  stop();

this.setup = function(){ canvas = createCanvas(window.innerWidth, window.innerHeight);

}
this.draw = function(){  background(0);
  textSize(32);
  text("YOU HAVE LOST", window.innerWidth/2 - 150, window.innerHeight/2);

ellipse(window.innerWidth/2, window.innerHeight/2 - 300, 64, 64);






  //textAlign(CENTER);
  textSize(50);
  fill(250);

}
this.setup();
this.draw();

}

*/


function draw() {


  background(0);
  textSize(32);
  text("Score: " + Score, window.innerWidth -500, window.innerHeight - (window.innerHeight * 0.9));
  text("Top Score: " + TopScore, window.innerWidth -500, window.innerHeight - 50);

  fill(250, 100, 153)
  Instance.show();
  Instance.update();


  //Triangle.show();
  //Triangle.update();
  for (var i = obstacles.length-1; i >= 0; i--) {
      obstacles[i].show();
      obstacles[i].update();

      if (obstacles[i].hits(Instance)) {
        GameOver();
      }


      if (obstacles[i].offscreen()) {
        obstacles.splice(i, 1);
      }

    }
    for (var i = Sobstacles.length-1; i >= 0; i--) {
        Sobstacles[i].show();
        Sobstacles[i].update();

      if (Sobstacles[i].hits(Instance)) {
        GameOver();
        }


        if (Sobstacles[i].offscreen()) {
          Sobstacles.splice(i, 1);
        }

      }
    if (frameCount % 50 == 0) {
      obstacles.push(new Obstacle());

    }
    if (frameCount % 30 == 0) {
      Sobstacles.push(new SkyObj());
    }

    if (frameCount % 200 == 0) {
        Score++;
        if(Score > TopScore){
          TopScore = Score;

        }

    }



  Terrain.show();
  if (Score == 5 || Score == 10 || Score == 15) {
    Harder();
  }

}
// function mouseClicked() {
// //  console.log("LMAO");
//   reseter();
//
//   }
function Harder(){
  diffMult;
  //SpeedBoost.update();
}

function keyPressed() {
  if (key == ' ') {
    Instance.jump();
    console.log("SPACE");
  }
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};
