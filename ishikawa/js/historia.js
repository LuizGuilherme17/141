const texto = `

Os registros abaixo pertencem ao Arquivo Principal do Clã Ishikawa.

Sua reprodução sem autorização da linhagem é proibida.



ARQUIVO HISTÓRICO

Origem do Clã Ishikawa



A história do Clã Ishikawa teve início no ano de 854.

Naquela época, o poderoso Clã Fujiwara dedicava-se ao estudo e à manipulação do paranormal, utilizando seus conhecimentos para ampliar sua influência sobre os demais clãs.

Buscando alcançar um poder jamais visto, os Fujiwara desenvolveram um ritual capaz de fundir a essência humana com o paranormal.

O objetivo era criar um indivíduo que já nascesse carregando características de uma entidade sobrenatural.

O resultado dessa experiência foi o nascimento de Uto Fujiwara, considerado o primeiro híbrido entre humano e criatura paranormal.

Junto de seu nascimento manifestou-se uma técnica jamais registrada:

o Santuário.

Contudo, aquilo que deveria representar a maior arma dos Fujiwara tornou-se sua ruína.

Ao atingir a maturidade, Uto rebelou-se contra o próprio clã.

Recusando-se a servir como instrumento de guerra, reuniu seguidores e fundou uma nova linhagem.

Assim nasceu o Clã Ishikawa.

Durante muitos anos, Ishikawa e Fujiwara travaram inúmeros conflitos.

Mesmo em menor número, os Ishikawa mantiveram ampla superioridade graças ao Santuário, uma técnica hereditária que somente os descendentes de Uto eram capazes de despertar.

Na tentativa de alterar o rumo da guerra, o então líder dos Fujiwara, Rioto Fujiwara, realizou um ritual proibido.

Renunciando completamente à própria humanidade, Rioto transformou-se em uma criatura paranormal completa.

Após sua transformação, passou a ser conhecido pelo nome de Sukaretto.

O confronto entre Sukaretto e Uto marcou o maior conflito da história dos dois clãs.

Ao término da batalha, os Fujiwara foram completamente derrotados.

Os Ishikawa incorporaram os conhecimentos, rituais e técnicas pertencentes ao antigo clã, consolidando definitivamente sua supremacia.

Desde então, o Clã Ishikawa tornou-se a principal autoridade do submundo paranormal.

Ao longo das gerações, os descendentes de Uto herdaram tanto sua natureza híbrida quanto a técnica amaldiçoada conhecida como Santuário.

Mesmo após mais de um milênio, a linhagem permanece viva.

Enquanto existir um herdeiro Ishikawa, o Santuário jamais desaparecerá.

`;

const area = document.getElementById("texto");

let i = 0;

function escrever(){

    if(i < texto.length){

        area.textContent += texto.charAt(i);

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