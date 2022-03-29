//SELECTORS
const cells = document.querySelectorAll('.cell');
const message = document.querySelector('#message');
const click_audio = document.querySelector('.click_audio');
const gameover_audio = document.querySelector('.gameover_audio');
const btn_restart = document.querySelector('.btn-restart');
const btn_quit = document.querySelector('.btn-quit');
const modal = document.querySelector('.modal');

//VARIABLES
const wins = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

let count = 0;

//EVENTLISTENERS
btn_restart.addEventListener('click', gameRestart);
btn_quit.addEventListener('click', gameQuit);

cells.forEach((cell) =>{
    cell.addEventListener('click', action);
});


//FUNCTIONS

function action(e){
    if(e.target.className == 'cell'){
        if(e.target.innerHTML) return;
        if(count % 2 == 0) e.target.innerHTML ='X';
        else e.target.innerHTML ='O';
        count++;
        e.target.style.display = 'flex';
        e.target.style.justifyContent = 'center';
        e.target.style.alignItems = 'center';
        e.target.style.fontSize = '2rem';
        click_audio.play();
    }
    checkWinner();
}


function checkWinner(){
    /*
    if(cells[0].innerHTML == 'X' && cells[1].innerHTML == 'X' && cells[2].innerHTML == 'X')
    console.log('x');
    else if(cells[3].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[5].innerHTML == 'X')
    console.log('x');
    else if(cells[6].innerHTML == 'X' && cells[7].innerHTML == 'X' && cells[8].innerHTML == 'X')
    console.log('x');
    else if(cells[0].innerHTML == 'X' && cells[3].innerHTML == 'X' && cells[6].innerHTML == 'X')
    console.log('x');
    else if(cells[1].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[7].innerHTML == 'X')
    console.log('x');
    else if(cells[2].innerHTML == 'X' && cells[5].innerHTML == 'X' && cells[8].innerHTML == 'X')
    console.log('x');
    else if(cells[0].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[8].innerHTML == 'X')
    console.log('x');
    else if(cells[2].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[6].innerHTML == 'X')
    console.log('x');
    */

    for(let i = 0; i < wins.length; i++){
        if(cells[wins[i][0]].innerHTML == 'X' && cells[wins[i][1]].innerHTML == 'X' && cells[wins[i][2]].innerHTML == 'X'){
            gameover_audio.play();
            modal.classList.add('active');
            document.querySelector('.modal h2').innerText += ' X';
        }
        else if(cells[wins[i][0]].innerHTML == 'O' && cells[wins[i][1]].innerHTML == 'O' && cells[wins[i][2]].innerHTML == 'O'){
            gameover_audio.play();
            modal.classList.add('active');
            document.querySelector('.modal h2').innerText += ' O';
        }
    }
}


function gameRestart(){
    for(let i = 0; i < cells.length; i++){
        cells[i].innerHTML = '';
    }
    modal.classList.remove('active');
    count = 0;
    document.querySelector('.modal h2').innerText = 'Winner Is';
}

function gameQuit(){ 
    window.close();
}