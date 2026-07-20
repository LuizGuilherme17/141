//========================
// Flicker da tela
//========================

setInterval(()=>{

    document.body.classList.add("flicker");

    setTimeout(()=>{

        document.body.classList.remove("flicker");

    },80);

},2200);


//========================
// Glitches aleatórios
//========================

const painel=document.querySelector(".painel");
const titulo=document.querySelector("h1");
const logo=document.querySelector(".logo");

const elementos=[painel,titulo,logo];

function glitch(){

    const alvo=elementos[Math.floor(Math.random()*elementos.length)];

    alvo.classList.add("glitch");

    setTimeout(()=>{

        alvo.classList.remove("glitch");

    },180);

}

setInterval(glitch,3500);


//========================
// Tremor da logo
//========================

setInterval(()=>{

    logo.style.transform="translateX(2px)";

    setTimeout(()=>{

        logo.style.transform="translateX(-2px)";

    },60);

    setTimeout(()=>{

        logo.style.transform="translateX(0px)";

    },120);

},6500);


//========================
// Pequenos flashes vermelhos
//========================

setInterval(()=>{

    document.body.style.filter="brightness(1.08)";

    setTimeout(()=>{

        document.body.style.filter="brightness(1)";

    },40);

},9000);