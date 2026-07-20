const senha="Hayato";

const campo=document.getElementById("senha");

const botao=document.getElementById("entrar");

const mensagem=document.getElementById("mensagem");

campo.focus();

botao.addEventListener("click",entrar);

campo.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

entrar();

}

});

function entrar(){

if(campo.value===senha){

mensagem.style.color="#ff0000";

mensagem.innerHTML=

"HERANÇA CONFIRMADA.<br>BEM-VINDO, LOGAN ISHIKAWA.";

setTimeout(()=>{

window.location.href="heranca.html";

},2200);

}

else{

mensagem.style.color="#ff0000";

mensagem.innerHTML=

"VOCÊ NÃO PERTENCE À LINHAGEM.";

campo.value="";

campo.focus();

}

}