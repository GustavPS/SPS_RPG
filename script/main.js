var keyUpp = false, keyDown= false, keyLeft = false, keyRight = false;

function init() {
    game = document.getElementById('camera');
    ctx = game.getContext('2d');
    
    window.setInterval(update, 25);
}

function keyHandler(event) {
    key = event.keyCode;


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
    
    function keyUp(event) {
    if (event.keyCode === 87) {
        keyUpp = false;
        jmp -= 1;
    } if (event.keyCode === 83) {
        keyDown = false;
        vy = 0;
        characters[0].h = characters[0].h * 2;
    } if (event.keyCode === 65) {
        keyLeft = false;
        vx = 0;
    } if (event.keyCode === 68) {
        keyRight = false;
        vx = 0;
    }

}
    
    //måste skriva vad som händer när man trycker ner WASD

function keyDown() {
    
}

function update() {
    
}

