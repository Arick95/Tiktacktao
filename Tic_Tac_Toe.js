let fields = [];

let currentshape = 'circle';
let gameover = false;


function fillshape(id) {

    if (!fields[id] && !gameover) {

        fields[id] = currentshape;
        if (currentshape == 'circle') {
            currentshape = 'cross';
            document.getElementById('player_interaktive-1').classList.remove('player_interaktive');
            document.getElementById('player_interaktive-2').classList.add('player_interaktive');
        } else {
            currentshape = 'circle';
            document.getElementById('player_interaktive-2').classList.remove('player_interaktive');
            document.getElementById('player_interaktive-1').classList.add('player_interaktive');
        }
        draw();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
    checkforWin()
}

function checkforWin() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'scaleX(1) rotate(90deg)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'scaleX(1) rotate(90deg)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'scaleX(1) rotate(90deg)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'scaleX(1) rotate(45deg)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'scaleX(1) rotate(-45deg)';
    }

    if (winner) {
        gameover = true;
        game_finish(winner);
        document.getElementById('restart-btn').classList.remove('d-none');
    }
}

function game_finish(winner) {
    if (winner == 'circle') {
        document.getElementById('Victory').innerHTML = `
        <img id="Victory_img" class="Victory_img" src="./img/Victory.png"> Herzlichen Glückwunsch Spieler 1, Du hast Gewonnen.
        <img id="Victory_img" class="Victory_img" src="./img/Victory.png">`;
        document.getElementById('Victory').style.color = 'seagreen';
        document.getElementById('Victory').style.color = 'seagreen';
    }
    if (winner == 'cross') {
        document.getElementById('Victory').innerHTML = `
        <img id="Victory_img" class="Victory_img" src="./img/Victory.png"> Herzlichen Glückwunsch Spieler 2, Du hast Gewonnen.
        <img id="Victory_img" class="Victory_img" src="./img/Victory.png">`;
        document.getElementById('Victory').style.color = 'seagreen';
    }
}

function Restart() {
    gameover = false;
    currentshape = 'circle';
    fields = [];
    document.getElementById('player_interaktive-1').classList.remove('player_interaktive');
    document.getElementById('player_interaktive-2').classList.add('player_interaktive');
    document.getElementById('restart-btn').classList.add('d-none');
    document.getElementById('Victory').innerHTML = `<div id="Victory" class="Victory">
    <img id="Victory_img" class="Victory_img d-none" src="./img/Victory.png">Here is not a Text
    <img id="Victory_img" class="Victory_img d-none" src="./img/Victory.png"></div>`;
    document.getElementById('Victory').style.color = 'white';
    document.getElementById('Victory_img').style.opacity = '0';

    for (let i = 1; i < 8; i++) {
        document.getElementById('line-' + i).style.transform = 'scaleX(0)';;
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}
