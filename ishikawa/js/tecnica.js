const texto=`

Os registros abaixo pertencem ao Arquivo Principal do Clã Ishikawa.

Sua reprodução sem autorização da linhagem é proibida.



Arquivo Técnico Confidencial

Técnica Amaldiçoada

"Santuário" (伏魔御廚子)



Classificação:

Herança Restrita



Acesso:

Exclusivo à Linhagem Ishikawa



A técnica amaldiçoada conhecida como Santuário é atribuída exclusivamente ao clã Ishikawa, sendo considerada uma das manifestações mais perigosas já documentadas.

Embora, à primeira vista, pareça consistir apenas em ataques de corte, investigações sugerem que seu funcionamento é muito mais complexo, revelando um verdadeiro arsenal oculto dentro de uma única técnica.



Os ataques básicos identificados são Dismantle e Cleave.

O primeiro realiza cortes precisos contra qualquer alvo dentro do alcance do usuário.

O segundo adapta automaticamente sua potência à resistência física e à quantidade de energia amaldiçoada do oponente, efetuando um golpe calculado para provocar uma morte imediata ou dano crítico.



Após estudos de confrontos recentes, uma terceira aplicação foi registrada e classificada provisoriamente como Corte que Corta o Mundo.

Diferente dos demais ataques, este golpe não busca atravessar o alvo, mas sim o próprio espaço ocupado por ele.

Ao expandir o alvo do corte para o tecido do espaço, qualquer objeto, técnica defensiva ou barreira presente naquela coordenada é dividido simultaneamente.

A habilidade ignora métodos convencionais de defesa e representa uma evolução sem precedentes das técnicas de corte conhecidas.



Outra manifestação do Santuário é a técnica Fuga (開).

Sua existência demonstra que a técnica não se limita apenas a cortes.

Ao pronunciar o comando de abertura, o usuario manifesta chamas de temperatura extrema capazes de incinerar até maldições de alto nível.

A natureza dessa habilidade permanece desconhecida.

Alguns pesquisadores acreditam que o Santuário funcione como um depósito de fenômenos amaldiçoados, enquanto outros defendem que Fuga representa uma segunda propriedade da técnica ainda não completamente compreendida.



A expressão máxima do Santuário é sua Expansão de Domínio:

Santuário Malevolente.

Diferentemente de praticamente todos os Domínios conhecidos, esta expansão dispensa a criação de uma barreira.

Em vez de isolar um espaço, o usuario materializa seu domínio diretamente sobre a realidade, cobrindo uma vasta área onde todos os alvos são submetidos continuamente aos efeitos de Dismantle e Cleave.

A ausência de barreiras elimina uma das principais limitações dos Domínios tradicionais, ampliando drasticamente seu alcance e tornando a evasão extremamente difícil.



Relatórios indicam que o Santuário Malevolente representa a personificação da filosofia de combate do clã Ishikawa:

eficiência absoluta,

destruição inevitável

e domínio completo sobre o campo de batalha.

Cada manifestação da técnica reforça a hipótese de que o verdadeiro potencial do Santuário ainda não foi totalmente revelado.

`;

const area=document.getElementById("texto");

let i=0;

function escrever(){

    if(i<texto.length){

        area.textContent+=texto.charAt(i);

        i++;

        window.scrollTo(0,document.body.scrollHeight);

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