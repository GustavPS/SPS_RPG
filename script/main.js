var keyUpp = false, keyDown= false, keyLeft = false, keyRight = false;
var player = new Character(100, 100, 30, 30, 'none');
var wasd = true;
var vy = 0, vx = 0;

var objects = [];

function Object() {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.type = type;
}



function init() {
    game = document.getElementById('camera');
    ctx = game.getContext('2d');
    
    window.setInterval(update, 15);
}

function keyHandler(event) {
    var key = event.keyCode;

    if(wasd){
        if (key === 87) {
            keyUpp = true;
        } if (key === 83) {
            keyDown = true;
        } if (key === 65) {
            keyLeft = true;
        } if (key === 68) {
            keyRight = true;
        }
    }
}
    
    function keyUp(event) {
    if (event.keyCode === 87) {
        keyUpp = false;
        vy = 0;
    } if (event.keyCode === 83) {
        keyDown = false;
        vy = 0;
    } if (event.keyCode === 65) {
        keyLeft = false;
        vx = 0;
    } if (event.keyCode === 68) {
        keyRight = false;
        vx = 0;
    }

}   
    //måste skriva vad som händer när man trycker ner WASD

function Character(x, y, w, h, wep) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.wep = wep;
    this.speed = 2;
    this.render= function() {
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
    }
    
    this.walk = function() {
        if(keyUpp) {
            vy = -this.speed;
        }
        if(keyDown) {
            vy = this.speed;
        }
        if(keyRight) {
            vx = this.speed;
        }
        if(keyLeft) {
            vx = -this.speed;
        }
    }
}


/*function crashDetect() {
    for(var i = 0; i < objects.length; i++) {
        if(player.x >= )
    }
}*/


function Weapons(type, dmg, img, ammo, ispot){
    this.type = type;
    this.dmg = dmg;
    this.img = img;
    this.ammo = ammo;
    this.ispot = ispot;
    
    this.render = function() {
        if(this.type = 'ak47') {
            
        }
    }
}


function update() {
    ctx.clearRect(0, 0, 1280, 1000);
    player.render();
    player.walk();
    player.x += vx;
    player.y += vy;
}

