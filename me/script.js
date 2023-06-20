


const gameos = document.getElementById('gameos')




var mysong = document.getElementById("mysong")
document.getElementById('voliounmup').addEventListener('click', function(){
    mysong.play()
})
document.getElementById('voliounwn').addEventListener('click', function(){
    mysong.pause()
})


let audioTurn = new Audio('Message - 1 Second ! Notification.mp3');
let gameover =new Audio('Free Fire Booyah.mp3')

let turn = 'X';

let isgameover = false;
// functions
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// function cheack for a win 

const cheackWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {

if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
    document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Win"
    isgameover = true;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '250px'
    gameos.play()
//   alert(  document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Win");

}




    })
}


// Game logic
let box = document.getElementsByClassName("box");
Array.from(box).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
          turn =  changeTurn();
          audioTurn.play();
            cheackWin();
       
if(!isgameover){
    document.getElementsByClassName("info")[0].innerText = "Turn For" + " " + turn;
          
}


        }
    })
})




