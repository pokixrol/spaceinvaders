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
        for (let i = 0; i <= this.pocet; i++ ){
            if (i > 0){
                this.ae = 100 * i;
                this.xe = 20 + this.ae;
                ctx.fillRect(this.xe, this.ye, this.ae, this.be);
            }else
            ctx.fillRect(this.xe, this.ye, this.ae, this.be);
       }
        
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
         
            break;
        }
    
    
    });
    game.play();
