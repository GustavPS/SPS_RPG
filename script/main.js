var keyUpp = false, keyDown = false, keyLeft = false, keyRight = false;
var player = new Character(100, 100, 30, 30, 'none');
var wasd = true;
var vy = 0, vx = 0, mousex = 0, mousey = 0;
var a = 0, b = 0, c = 0, v = 0, bulletVY = 0, bulletVX = 0;
var xBullet, yBullet, bulletWidth = 15, bulletHeight = 15;
var objects = [new Object(200, 100, 100, 10, '', 'wall')], bullets = [];

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
    
    for(var i = 0; i < weapons.length; i++) {
        if(player.x >= weapons[i].x && player.x <= weapons[i].x + 5 && player.y >= weapons[i].y && player.y <= weapons[i].y + 5) {
            console.log('VAPEEEN');
        } else if(player.x + player.w >= weapons[i].x && player.x + player.w <= weapons[i].x + 5 && player.y >= weapons[i].y && player.y <= weapons[i].y + 5) {
            console.log('VAPEEEN');
        } else if(player.x >= weapons[i].x && player.x <= weapons[i].x + 5 && player.y + player.w >= weapons[i].y && player.y + player.w <= weapons[i].y) {
            console.log('VAPEEEN');
        } else if(player.x + player.w >= weapons[i].x && player.x + player.w <= weapons[i].x + 5 && player.y + player.w >= weapons[i].y && player.y + player.w <= weapons[i].y) {
            console.log('VAPEEEN');
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

<<<<<<< Updated upstream
function BulletObj(x, y, w, h) { 
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.render = function() {
        
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
        
    }
}

function generateBullets() {
    xBullet = player.x;
    yBullet = player.y;


    bullets.push(new BulletObj(xBullet, yBullet, bulletWidth, bulletHeight));
}


/*function crashDetect() {
    for(var i = 0; i < objects.length; i++) {
        if(player.x >= )
    }
}*/



var weapons = []

function Weapons(type, ispot){

=======
var weapons = [new Weapons(500, 500, 'ak47', 0)]

function Weapons(x, y, type, ispot){
>>>>>>> Stashed changes
    this.type = type;
    this.x = x;
    this.y = y;
    this.dmg
    this.img
    this.ammo
    this.ispot = ispot;
    
    this.render = function() {
        if(this.type = 'ak47') {
            this.dmg = 2;
            this.img = '';
            this.ammo = 10;
            ctx.beginPath();
            ctx.fillRect(this.x, this.y, 5, 5);
            ctx.closePath();
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

function shoot(){
    
    generateBullets();
    
    b = mousey - player.y;
    a = mousex - player.x;
    c = Math.sqrt(a+b);
    v = (b/c/90);
    
    bulletVY = c * Math.sin(v);
    bulletVX = c * Math.cos(v);
}

function showCoords(event) {
    var x = event.x;
    var y = event.y;

    x -= game.offsetLeft;
    y -= game.offsetTop;
    
    console.log(x);
    console.log(y);
    
}


function update() {
    ctx.clearRect(0, 0, 1280, 1000);
    crashDetect();
    for(var i = 0; i < objects.length; i++) {
        objects[i].render();
    }
    for(var i = 0; i < weapons.length; i++) {
        weapons[i].render();
    }
    player.render();
    player.walk();
    player.x += vx;
    player.y += vy;
    
<<<<<<< Updated upstream
    
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].render();
        
        bullets[i].x += bulletVX;
        bullets[i].y += bulletVY;
    }
        
    console.log(mousex,mousey);
    
=======
>>>>>>> Stashed changes
}


