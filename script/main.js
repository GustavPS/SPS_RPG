var keyUpp = false, keyDown= false, keyLeft = false, keyRight = false;
var player = new Character(100, 100, 30, 30, 'none');
var wasd = true;
var vy = 0, vx = 0, mousex = 0, mousey = 0;

var objects = [new Object(200, 100, 100, 10, '', 'wall')];

function Object(x,y , w, h, img, type) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.type = type;
    this.render= function() {
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

function crashDetect() {
    for(var i = 0; i < objects.length; i++) {
        if(player.x >= objects[i].x && player.x <= objects[i].x + objects[i].w && player.y >= objects[i].y && player.y <= objects[i].y + objects[i].h) {
            console.log('CRASH');
        } else if(player.x + player.w >= objects[i].x && player.x + player.w <= objects[i].x + objects[i].w && player.y >= objects[i].y && player.y <= objects[i].y + objects[i].h) {
            console.log('CRASH');
        } else if(player.x >= objects[i].x && player.x <= objects[i].x + objects[i].w && player.y + player.h >= objects[i].y && player.y + player.h <= objects[i].y + objects[i].h) {
            console.log('CRASH');
        } else if(player.x + player.w >= objects[i].x && player.x + player.w <= objects[i].x + objects[i].w && player.y + player.h >= objects[i].y && player.y + player.h <= objects[i].y + objects[i].h) {
            console.log('CRASH');
        } else if(objects[i].x >= player.x && objects[i].x <= player.x + player.w && objects[i].y >= player.y && objects[i].y <= player.y + player.h) {
            console.log('CRASH');
        } else if(objects[i].x + objects[i].w >= player.x && objects[i].x + objects[i].w <= player.x && objects[i].y >= player.y && objects[i].y <= player.y + player.h) {
            console.log('CRASH');
        }
    }
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
    this.speed = 5;
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

<<<<<<< HEAD

/*function crashDetect() {
    for(var i = 0; i < objects.length; i++) {
        if(player.x >= )
    }
}*/


function Weapons(type, dmg, img, ammo, ispot){
=======
var weapons = []

function Weapons(type, ispot){
>>>>>>> weapons
    this.type = type;
    this.dmg
    this.img
    this.ammo
    this.ispot = ispot;
    
    this.render = function() {
        if(this.type = 'ak47') {
            this.dmg = 2;
            this.img = '';
            this.ammo = 10;
        }
        if(this.type = 'shotgun') {
            this.dmg = 4;
            this.img = '';
            this.ammo = 5;
        }
        if(this.type = 'pistol') {
            this.dmg = 1;
            this.img = '';
            this.ammo = 100;
        }
        
    }
}

<<<<<<< HEAD
=======
function showCoords(event) {
    mousex = event.clientX;
    mousey = event.clientY;
    
}
>>>>>>> weapons

function update() {
    ctx.clearRect(0, 0, 1280, 1000);
    crashDetect();
    for(var i = 0; i < objects.length; i++) {
        objects[i].render();
    }
    
    player.render();
    player.walk();
    player.x += vx;
    player.y += vy;
    
    console.log(mousex, mousey);
    
}


