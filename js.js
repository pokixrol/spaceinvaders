const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
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
// ********************************************
let enemy = {
    xe: 10,
    ye: 10,
    ae: 100,
    be: 50,
    mezera: 10,
    pocet: 9,
    paint: function(){
        ctx.fillStyle = 'red';
        /*for (let i = 0; i <= this.pocet; i++ ){
            if (i > 0){
                this.ae = 100 * i;
                this.xe = 20 + this.ae;
                ctx.fillRect(this.xe, this.ye, this.ae, this.be);
            }else*/
            ctx.fillRect(this.xe, this.ye, this.ae, this.be);
      // }
    },
    paint2: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +110, this.ye, this.ae, this.be);
    },
    paint3: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +220, this.ye, this.ae, this.be);
    },
    paint4: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +330, this.ye, this.ae, this.be);
    },
    paint5: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +440, this.ye, this.ae, this.be);
    },
    paint6: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +550, this.ye, this.ae, this.be);
    },
    paint7: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +660, this.ye, this.ae, this.be);
    },
    paint8: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +770, this.ye, this.ae, this.be);
    },
    paint9: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +880, this.ye, this.ae, this.be);
    },
    paint10: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe, this.ye +60, this.ae, this.be);
    },
    paint22: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +110, this.ye +60, this.ae, this.be);
    },
    paint32: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +220, this.ye +60, this.ae, this.be);
    },
    paint42: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +330, this.ye +60, this.ae, this.be);
    },
    paint52: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +440, this.ye +60, this.ae, this.be);
    },
    paint62: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +550, this.ye +60, this.ae, this.be);
    },
    paint72: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +660, this.ye +60, this.ae, this.be);
    },
    paint82: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +770, this.ye +60, this.ae, this.be);
    },
    paint92: function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.xe +880, this.ye +60, this.ae, this.be);
    }
}
// ***********************************************
let game = {
    timer: null,
    play: function() {
        this.timer = setInterval(function() {
            game.repaint();
        }, 20);    
    },
    repaint: function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        strelec.paint();
        enemy.paint();
        enemy.paint2();
        enemy.paint3();
        enemy.paint4();
        enemy.paint5();
        enemy.paint6();
        enemy.paint7();
        enemy.paint8();
        enemy.paint9();
        enemy.paint10();
        enemy.paint22();
        enemy.paint32();
        enemy.paint42();
        enemy.paint52();
        enemy.paint62();
        enemy.paint72();
        enemy.paint82();
        enemy.paint92();
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
         ctx.fillStyle = 'blue';
         ctx.fillRect(strelec.x +40, strelec.y - 20, 20, 20);
            break;
        }
    
    
    });
    game.play();
