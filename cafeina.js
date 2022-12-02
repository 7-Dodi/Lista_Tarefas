const tarefa ={ //Criando o protótipo de objeto com 
    nome: "",
    time: "",
}

const vetor=[]; //Criando o vetor para armarzenar os eventos criados

const salvar= document.querySelector("#salvar"); //Button para salvar o evento
const limpar= document.querySelector("#limpar"); //Button para limpar a interface
const apagar= document.querySelector("#apagar"); //Button para apagar todos os eventos
const campo= document.querySelector(".resposta"); //Espaço onde será apresentado os dados

function adcVetor(item){ //Função para adicionar os eventos no vetor e ordená-los em hora
    vetor.push(item);
    vetor.sort((a,b)=>((a.hora[0]+a.hora[1])-(b.hora[0]+b.hora[1])));
    return vetor;
}

function imprimirDados(vetor){ //Função para imprimir o vetor principal
    const vetAux = []; //Vetor auxiliar
    for (const item of vetor) { 
        const total= document.createElement("p"); //Irá conter todos os elementos
        const li1= document.createElement("span"); //Criando espaços de interação
        const li2= document.createElement("span");
        const li3= document.createElement("button");
        const li4= document.createElement("button");

        //Aplicando Classes para que possa ser alterado no CSS
        total.classList.add("total");
        li1.classList.add("nome");
        li2.classList.add("hora");
        li3.classList.add("feito");
        li4.classList.add("cancelar");

        //Aplicando eventos aos butões
        li3.addEventListener("click", ()=>{
            li1.style.color= "white";
            li1.style.backgroundColor= "green"
            li2.style.color= "white";
            li2.style.backgroundColor= "green"
        });

        li4.addEventListener("click", ()=>{
            li1.style.color= "white";
            li1.style.backgroundColor= "red"
            li2.style.color= "white";
            li2.style.backgroundColor= "red"
        });

        //Informa os textos de cada chave
        li1.textContent= item.nome;
        li2.textContent= item.time;
        li3.textContent= "Feito";
        li4.textContent= "Cancelar";

        //Aplicar todas as chaves a uma só estrutura
        total.appendChild(li1);
        total.appendChild(li2);
        total.appendChild(li3);
        total.appendChild(li4);

        //Adicionando a estrutura ao vetor
        vetAux.push(total);
    }
    campo.replaceChildren(...vetAux); //Usando a função replaceChildren()
}

//Button salavar
salvar.addEventListener("click", ()=>{
    const nome= document.querySelector("#nome").value;
    const time= document.querySelector("#time").value; 

    const hora= time.split(":");
    
    const criar= Object.create(tarefa); //Criando objeto
    criar.nome= nome;
    criar.hora= hora;
    criar.time= time;

    adcVetor(criar); //Adicionando ao vetor
    imprimirDados(vetor); //Imprimindo
});

limpar.addEventListener("click", ()=>{ //Limpando a interface
    const nome= document.querySelector("#nome").value= "";
    const time= document.querySelector("#time").value= "";
    campo.innerHTML= "";
});

apagar.addEventListener("click", ()=>{ //Apagando os eventos
    if(vetor.length != 0){
        vetor.length= 0;
        campo.innerHTML= "";
    }
});

