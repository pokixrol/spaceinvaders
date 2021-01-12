const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


class Enemy {
    constructor(x, y, a,b){
        this.x = x
        this.y = y
        this.a = a 
        this.b = b 

    }
     paint (){

            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.a, this.b);

     }
}

let enemy1 = new Enemy(10, 10, 100, 50)

let enemies = []

function pridejEnemy(){
    let pomoc = 10;
    for ( i = 0; i <= 9 ;i++ ){
  enemies.push(new Enemy(pomoc, 10, 100, 50))
  enemies[i].paint()
 pomoc +=110;
    }

}

class Bullet {
    constructor(x, y, a,b){
        this.x = x
        this.y = y
        this.a = a 
        this.b = b 
    }
}

//*******************************************
let strelec = {
    x: canvas.width / 2,
    y: canvas.height -50,
    a: 100,
    b: 50,
    sensitivity: 10,

    paint: function(){
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.a, this.b);
    }

}

// ***********************************************
let game = {
    timer: null,
    activeBullet: null,
    play: function() {
        //this.activeBullet = new Bullet();    
        this.timer = setInterval(function() {
            game.repaint();
        }, 20);    
    },
    repaint: function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        strelec.paint();
        pridejEnemy();
        bullet.paintbullet();
        //this.game.activeBullet.bullets.forEach(function(shot){
           

       // });
    }
}
// **********************************************
document.addEventListener('keydown', function(event){
   
    switch (event.code){
       
        case 'ArrowLeft':  strelec.x -= strelec.sensitivity;
            break; 
        case 'ArrowRight':  strelec.x += strelec.sensitivity;
            break;
            
        case 'Space': 
        // game.activeBullet.bullets.push({x: strelec.x +40,y: strelec.y - 20,a: 20,b: 20})
         let bullet = {
             paintbullet: function (){
                ctx.fillStyle = 'blue';
                ctx.fillRect(strelec.x +40, strelec.y - 20, 20, 20);
             }
         }
            break;
        }
    
    
    });
    game.play();
