let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let h5=document.querySelector("h3")
let btns=["red","green","blue","yellow"]

//step1: press any key to start the game 

document.querySelector("button").addEventListener("click",function(){
    if(started==false)
        console.log('game started');
    levelup();
})

//step2: increase the level and flashback the btn

function levelup(){
    userseq=[];
    level++;
    h5.innerText="Level:"+level;
    let rndmindex=Math.floor(Math.random()*4)
    let rndmcolor=btns[rndmindex];
    gameseq.push(rndmcolor); console.log(gameseq)
    let rndmbtn=document.querySelector(`.${rndmcolor}`)
    console.log(rndmcolor);
    console.log(rndmbtn);
    btnFlash(rndmbtn);
}
function btnFlash(item){
item.classList.add("flash");
setTimeout(function(){
    item.classList.remove("flash")
},300)
}

//step3:----------user button press--------------------------------------------------------
function btnpress(){
    console.log("btn is pressed");
    console.log(this);
    let btn=this;

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor)
    userFlash(btn);
    check(userseq.length-1);
}
function userFlash(item){
    item.classList.add("user");
    setTimeout(function(){
        item.classList.remove("user");
    },300)
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
    
}

//step4:------------matching sequence-----------------------------------------

function check(idx){
let index=idx;
if(userseq[index]==gameseq[index]){
  if(userseq.length==gameseq.length) {
   setTimeout(levelup,700)
}
}   
else {
h5.innerHTML="sorry!, your game is over<br>Your score:"+level+"<br>press below button to start again";
document.querySelector("body").style.backgroundColor="red";
setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
},2000)
reset();
}
}

function reset(){
    gameseq=[]; userseq=[];started=false;
    level=0;
}