const clickAudio = new Audio("sons/click.mp3");

const keyAudio = new Audio("sons/keypress.mp3");

const hoverAudio = new Audio("sons/hover.mp3");

const enterAudio = new Audio("sons/enter.mp3");

const errorAudio = new Audio("sons/error.mp3");

clickAudio.volume=.45;
keyAudio.volume=.25;
hoverAudio.volume=.35;
enterAudio.volume=.60;
errorAudio.volume=.70;

window.addEventListener("DOMContentLoaded",()=>{

    const campo=document.getElementById("senha");

    const botao=document.getElementById("btnEntrar");

    campo.addEventListener("focus",()=>{

        clickAudio.currentTime=0;

        clickAudio.play();

    });

    campo.addEventListener("keydown",(e)=>{

        if(e.key.length===1 || e.key==="Backspace"){

            keyAudio.currentTime=0;

            keyAudio.play();

        }

    });

    botao.addEventListener("mouseenter",()=>{

        hoverAudio.currentTime=0;

        hoverAudio.play();

    });

});

function tocarEnter(){

    enterAudio.currentTime=0;

    enterAudio.play();

}

function tocarErro(){

    errorAudio.currentTime=0;

    errorAudio.play();

}