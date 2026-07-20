const hover=new Audio("sons/hover.mp3");

const click=new Audio("sons/enter.mp3");

const glitch=new Audio("sons/hoverglitch.mp3");

hover.volume=.35;

click.volume=.55;

glitch.volume=.5;

const botoes=document.querySelectorAll(".botaoMenu");

botoes.forEach(botao=>{

    botao.addEventListener("mouseenter",()=>{

        hover.currentTime=0;

        hover.play();

    });

    botao.addEventListener("click",()=>{

        click.currentTime=0;

        click.play();

    });

});

const secreto=document.getElementById("botaoSecreto");

secreto.addEventListener("mouseenter",()=>{

    glitch.currentTime=0;

    glitch.play();

});