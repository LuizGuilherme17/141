const status = document.getElementById("status");

status.textContent = "RECUPERANDO MEMÓRIAS HEREDITÁRIAS...";

setTimeout(()=>{

    status.textContent = "REGISTRO ENCONTRADO.";

},1800);

setTimeout(()=>{

    status.textContent = "";

    escrever();

},3200);
const texto = `

Você atravessou um portal que permaneceu selado por muitos anos.

Se estas palavras chegaram até seus olhos, é porque o sangue dos Ishikawa respondeu ao chamado.

Durante gerações, nossa linhagem caminhou entre o mundo comum e aquilo que jamais deveria ser compreendido.

Enquanto outros temiam o desconhecido, nós o moldávamos.

Enquanto outros rezavam por proteção, nós transformávamos o paranormal em nossa própria arma.

Seu pai, Hayato Ishikawa, escolheu abandonar esse destino.

Ao renunciar ao seu nome, ao seu clã e ao seu legado, acreditou que poderia romper os laços escritos pelo próprio sangue.

Estava errado.

A herança nunca desaparece.

Ela apenas aguarda.

Durante anos você viveu sob outro sobrenome.

Acreditou que era apenas Logan Brown.

Acreditou que a morte de seus pais foi obra do acaso.

Acreditou que sua cicatriz era apenas uma lembrança daquela noite.

Todas essas crenças eram mentiras cuidadosamente preservadas.

Em suas veias corre o sangue da família Ishikawa.

Sua existência é a continuação de uma linhagem iniciada muito antes do seu nascimento.

A marca em seu peito não representa apenas sobrevivência.

Ela representa sucessão.

O poder que repousa em seu interior desperta lentamente.

A técnica proibida do clã jamais escolhe um estranho.

Ela sempre retorna ao verdadeiro herdeiro.

O Santuário aguarda.

A partir deste momento, os registros ocultos do Clã Ishikawa estarão disponíveis.

Não há retorno.

Aceitar este legado significa abandonar para sempre a ignorância.

Você deixará de ser apenas Logan Brown.

E será reconhecido pelo nome que sempre lhe pertenceu.

LOGAN ISHIKAWA.

`;

const area = document.getElementById("texto");
const botao = document.getElementById("aceitar");

let i = 0;

function escrever(){

    if(i < texto.length){

        area.textContent += texto.charAt(i);

        i++;

        window.scrollTo({

            top:document.body.scrollHeight,

            behavior:"smooth"

        });

        setTimeout(escrever,50);

    }

    else{

        botao.style.display="block";

        botao.animate([

            {opacity:0},

            {opacity:1}

        ],{

            duration:900,

            fill:"forwards"

        });

    }

}

setTimeout(escrever,1200);


//=========================
// GLITCHS
//=========================

setInterval(()=>{

    document.body.classList.add("glitch");

    setTimeout(()=>{

        document.body.classList.remove("glitch");

    },120);

},4000);


//=========================
// FLICKER
//=========================

setInterval(()=>{

    document.body.classList.add("flicker");

    setTimeout(()=>{

        document.body.classList.remove("flicker");

    },70);

},2500);


//=========================
// BOTÃO
//=========================

botao.addEventListener("click",()=>{

    window.location.href="menu.html";

});