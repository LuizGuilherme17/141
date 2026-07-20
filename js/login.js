const SENHA = "13061983";

const campo = document.getElementById("senha");

const botao = document.getElementById("btnEntrar");

const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", entrar);

campo.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        entrar();

    }

});

function entrar(){

    if(campo.value === SENHA){

        tocarEnter();

        setTimeout(()=>{

            window.location.href="menu.html";

        },350);

    }

    else{

        tocarErro();

        mensagem.textContent="ACESSO NEGADO";

        campo.value="";

        campo.focus();

    }

}