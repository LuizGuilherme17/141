const hover=new Audio("sons/hover.mp3");

const abrir=new Audio("sons/click.mp3");

const negado=new Audio("sons/error.mp3");

hover.volume=.35;

abrir.volume=.45;

negado.volume=.55;

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

hover.currentTime=0;

hover.play();

});

});

function tocarAbrir(){

abrir.currentTime=0;

abrir.play();

}

function tocarNegado(){

negado.currentTime=0;

negado.play();

}