//Getting Images
let getcharcter=document.getElementById('move');
let getcar1=document.getElementById('carOne');
let getcar2=document.getElementById('carTwo');
let getscore=document.getElementById('loop');
getscore.innerText=`Score: ${0}`;
//Getting positions(translateX/Y/Z())
let XPos=12;
let Zpos=-50;
let Z2pos=-75;

//OUT!!!
function checkOut(){
    if(XPos===80){
        getscore.innerText=`Score: ${(XPos*2)+1}`;
        alert("Hurray!!!!! You Won!!!!!");
        resetPos();
    }
    else if(XPos<=12){
        getscore.innerText=`Score: ${0}`;
    }
    
    else{
        getscore.innerText=`Score: ${(XPos*2)+1}`;
        if(XPos >= 30 && XPos <= 40 && Zpos >= 25 && Zpos <= 27 || (XPos>54 && XPos<61 && Z2pos <= 25 && Z2pos >= 23)){
            alert("OUT!!!!");
            resetPos();
        }
    }
}

//Reset position of character
function resetPos(){
    XPos=12;
    getcharcter.style.transform=`translateX(${XPos}vw) translateY(0vh) translateZ(25vh)`;
}


//Moving the charcter
function moveChr(eve){
    if(eve.key==="ArrowRight"){
        if(XPos<=80){
            
            XPos+=0.5;
            getcharcter.style.transform=`translateX(${XPos}vw) translateY(0vh) translateZ(25vh) rotateY(0deg)`;
        }
    }
    else if(eve.key==="ArrowLeft"){
        if(XPos>=12){   
            XPos-=0.5;
            getcharcter.style.transform=`translateX(${XPos}vw) translateY(0vh) translateZ(25vh) rotateY(180deg)`;
        }
    }
}
document.addEventListener("keydown",moveChr);

//Moving the cars
function movecar1(){
    if(Zpos===30){
        Zpos=-50;
    }
    else{
        Zpos+=2;
    }

    getcar1.style.transform=`translateX(35vw) translateY(65vh) translateZ(${Zpos}vh)`;
    checkOut()
}

function movecar2(){
    if(Z2pos===25){
        Z2pos=-75;
    }
    else{
        Z2pos+=2;
    }
    getcar2.style.transform=`translateX(55vw) translateY(65vh) translateZ(${Z2pos}vh)`;
    checkOut();
}

setInterval(movecar1,50);
setInterval(movecar2,30);

//Altert on load
function al(){
    alert("Press ArrowRight to move Right\nPress ArrowLeft to move left\n\nThis game only works on Laptop/pc");
}
window.onload=al;