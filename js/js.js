const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//*****************************************************
class Enemy {
  constructor(x, y, a, b) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.b = b;
    this.img = new Image();
    this.img.src = 'img/e.png';
  }
  paint() {
    ctx.drawImage(this.img, this.x, this.y, this.a, this.b);
  }
}

let enemy1 = new Enemy(10, 10, 100, 75);

let enemies = [];

function pridejEnemy() {
  let pomoc = 10;
  for (i = 0; i <= 9; i++) {
    enemies.push(new Enemy(pomoc, 10, 100, 75));
    enemies[i].paint();
    pomoc += 110;
  }
}
// ***********************************************
class Bullet {
  constructor(x, y, a, b, speed) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.b = b;
    this.speed = speed;
  }

  paint() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.a, this.b);
  }

  move() {
    this.y -= this.speed;
  }
}

let bullets = [];

//*******************************************
let strelec = {
  x: (canvas.width / 2) -50,
  y: canvas.height - 50,
  a: 100,
  b: 50,
  sensitivity: 10,
  img: new Image(),
  
  init: function(){
 this.img.src = 'img/p.png';
  },

  paint: function () {
    
    ctx.drawImage(this.img, this.x, this.y, this.a, this.b);
  },
};

// ***********************************************
let game = {
  timer: null,
  play: function () {
    this.timer = setInterval(function () {
      game.repaint();
    }, 20);
  },

  repaint: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    strelec.init();
    strelec.paint();
    pridejEnemy();
    
    bullets.forEach(function(bullet, i, bullet_array){
        bullet.paint();
        bullet.move();
        enemies.forEach(function(enemy, index, enemy_array) {
          if(detectCollisionRectRect(bullet, enemy)){
            bullet_array.splice(i,1);
            enemy_array.splice(index, 1);
          }  
        });
    });
       
      },
};
// **********************************************
document.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowLeft":
      strelec.x -= strelec.sensitivity;
      break;
    case "ArrowRight":
      strelec.x += strelec.sensitivity;
      break;
  }
});
document.addEventListener("click", function () {
  bullets.push(new Bullet(strelec.x + 50, strelec.y - 10, 10, 10, 3));
});
//****************************************************
game.play();
