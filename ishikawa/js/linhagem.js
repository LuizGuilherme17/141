const texto=`

Os registros abaixo pertencem ao Arquivo Principal do Clã Ishikawa.

Sua reprodução sem autorização da linhagem é proibida.



ARQUIVO DE LINHAGEM



Jacob Vincent Brown era, na realidade, Hayato Ishikawa.

Herdeiro direto do Clã Ishikawa, Hayato nasceu destinado a liderar uma das linhagens mais influentes do submundo paranormal.



Camila Albuquerque, por outro lado, era apenas uma estudante comum.

Seu primeiro contato com o paranormal aconteceu por acaso, quando um dos assassinos do Clã Ishikawa cometeu um erro durante uma missão e revelou sua existência diante dela.

Ao perceberem que Camila não demonstrava medo nem surpresa diante do paranormal, os líderes do clã decidiram acolhê-la.

Ela passou a ser treinada como uma das assassinas da organização.



Foi durante esse treinamento que Hayato e Camila se conheceram.

Os dois passaram anos treinando juntos no dojo do clã.

Aquilo que começou como uma rivalidade acabou se transformando em um relacionamento.



Com o passar dos anos, Hayato passou a discordar das mudanças promovidas dentro do Clã Ishikawa.

A crescente modernização implantada por Yutaka Shinomiya e o destino reservado aos herdeiros fizeram com que Hayato perdesse a confiança nos ideais do clã.

Temendo a represália que sofreriam caso seu relacionamento fosse descoberto, Hayato e Camila decidiram fugir.

Os dois partiram para Baker City, no estado do Oregon.

Para apagar seus rastros, Hayato abandonou seu verdadeiro nome e passou a viver como Jacob Vincent Brown.



Durante alguns anos, o casal conseguiu viver em paz.

Até que um pequeno descuido revelou sua localização.

O Clã Ishikawa enviou seu mais habilidoso assassino para eliminar os dois.

Seu nome era Yutaka Shinomiya.

Antigo melhor amigo de Hayato.



A missão foi parcialmente bem-sucedida.

Hayato Ishikawa e Camila Albuquerque foram mortos.

Entretanto, Yutaka falhou em completar sua verdadeira missão.

O filho do casal permaneceu vivo.



Seu nome era...

Logan Ishikawa Brown.



Sem saber de sua verdadeira origem, Logan cresceu acreditando ser apenas Logan Brown.

No entanto, o sangue do Clã Ishikawa continua fluindo em suas veias.

Como descendente direto de Uto Ishikawa, ele herdou a técnica amaldiçoada reservada aos membros da linhagem principal.



御厨子

"Santuário"



Após a fuga de Hayato, o comando do Clã Ishikawa permaneceu sem seu sucessor legítimo.

Para impedir o enfraquecimento da família, Suiryu Ishikawa, pai de Hayato, recorreu ao antigo ritual desenvolvido pelo extinto Clã Fujiwara.

Abandonando completamente sua humanidade, Suiryu transformou-se em uma criatura paranormal completa.

Desde então, permanece governando o Clã Ishikawa enquanto aguarda o retorno do verdadeiro herdeiro.

`;

const area=document.getElementById("texto");

let i=0;

function escrever(){

    if(i<texto.length){

        area.textContent+=texto.charAt(i);

        i++;

        window.scrollTo({

            top:document.body.scrollHeight,

            behavior:"smooth"

        });

        setTimeout(escrever,20);

    }

}

setTimeout(escrever,800);

setInterval(()=>{

    document.body.classList.add("glitch");

    setTimeout(()=>{

        document.body.classList.remove("glitch");

    },120);

},4500);