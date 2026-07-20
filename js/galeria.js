//========================
// CATEGORIAS
//========================

const categorias=document.querySelectorAll(".categoria");

categorias.forEach(categoria=>{

    const titulo=categoria.querySelector(".tituloCategoria");

    const imagens=categoria.querySelector(".imagens");

    const seta=titulo.querySelector(".seta");

    titulo.addEventListener("click",()=>{

        imagens.classList.toggle("oculta");

        if(imagens.classList.contains("oculta")){

            seta.textContent="►";

        }

        else{

            seta.textContent="▼";

        }

    });

});

//========================
// MODAL
//========================

const modal=document.getElementById("modal");

const imagemModal=document.getElementById("imagemModal");

const fechar=document.getElementById("fechar");

document.querySelectorAll(".card img").forEach(img=>{

    img.addEventListener("click",()=>{

tocarAbrir();

imagemModal.src=img.src;

arquivo.textContent="ARQUIVO: "+img.dataset.arquivo;

data.textContent="DATA: "+img.dataset.data;

local.textContent="LOCAL: "+img.dataset.local;

classe.textContent="CLASSIFICAÇÃO: "+img.dataset.classe;

autor.textContent="AUTOR: "+img.dataset.autor;

modal.style.display="flex";

zoom=0;

imagemModal.style.transform="scale(1)";

});

});

fechar.addEventListener("click",()=>{

    modal.style.display="none";

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

});

//========================
// IMAGEM BLOQUEADA
//========================

tocarNegado();
document.querySelectorAll(".bloqueada").forEach(card=>{

    card.addEventListener("click",()=>{

        modal.style.display="flex";

        imagemModal.style.display="none";

        fechar.style.display="block";

        const aviso=document.createElement("div");

        aviso.className="mensagemNegado";

        aviso.id="aviso";

        aviso.innerHTML=`

        ACESSO NEGADO

        <br><br>

        NÍVEL DE AUTORIZAÇÃO INSUFICIENTE

        <br><br>

        CÓDIGO C.I.F.T. 403

        `;

        modal.appendChild(aviso);

    });

});

fechar.addEventListener("click",()=>{

    imagemModal.style.display="block";

    const aviso=document.getElementById("aviso");

    if(aviso){

        aviso.remove();

    }

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        imagemModal.style.display="block";

        const aviso=document.getElementById("aviso");

        if(aviso){

            aviso.remove();

        }

    }

});

//========================
// PESQUISA
//========================

const pesquisa=document.getElementById("pesquisa");

pesquisa.addEventListener("keyup",()=>{

    const texto=pesquisa.value.toLowerCase();

    categorias.forEach(categoria=>{

        const titulo=categoria.querySelector(".tituloCategoria");

        if(titulo.textContent.toLowerCase().includes(texto)){

            categoria.style.display="block";

        }

        else{

            categoria.style.display="none";

        }

    });

});

//========================
// CONTADOR
//========================

const contador=document.getElementById("contador");

const cards=document.querySelectorAll(".card");

contador.textContent=cards.length+" ARQUIVOS ENCONTRADOS";