let gameSeq = [];
let userSeq = [];

let btns = ["pink","blue","red","yellow"];

let start = false; //first before game starts
let level = 0;

let h2 = document.querySelector('h2');



document.addEventListener("keypress", function(){
    
    if(start == false){
        console.log("Game is Started");
        start = true;

        levelUp();
    }
    
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout( function(){
        btn.classList.remove("userFlash");
    },200);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    //random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr lvl: ",level);

    // let idx = level - 1;

    if(userSeq[idx] ===  gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }
    else{
        h2.innerText = `Game Over! your score is ${level} Press any key to start `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }

}


function userPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",userPress);
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}