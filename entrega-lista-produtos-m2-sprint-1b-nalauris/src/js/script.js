//montando o total de compras

const tagAsidePreco = document.querySelector('.containerPrecoTotal');
const divSemItem = document.createElement('div');
const divFixa = document.createElement('div');
const pFixa = document.createElement('p');
const pTextoSemItem = document.createElement('p');

divFixa.classList.add("divFixa");
divSemItem.classList.add("divSemItem");

pTextoSemItem.innerText = "Por enquanto não temos produtos no carrinho" ;
pFixa.innerText = "Carrinho";

tagAsidePreco.appendChild(divFixa);
divFixa.appendChild(pFixa);
tagAsidePreco.appendChild(divSemItem);
divSemItem.appendChild(pTextoSemItem);



const ul = document.querySelector('.containerListaProdutos ul');


function montarListaProdutos(listaProdutos) {
    ul.innerHTML = '';
    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const divProd  = document.createElement('div');
        const divCarac  = document.createElement('div');
        const divCompra  = document.createElement('div');
        const pPreco = document.createElement('p');
        const spanSecao = document.createElement('span');
        const ulComponentes = document.createElement('ol');

        const bntCompra = document.createElement('button');

        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        pPreco.innerText = "R$" + produto.preco + ",00";
        spanSecao.innerText = produto.secao;
        bntCompra.innerText  = "Comprar"; 
        bntCompra.id  = produto.id; 

        ulComponentes.classList.add("ulComponentes");
        divProd.classList.add("divProd");
        divCarac.classList.add("divCarac");
        divCompra.classList.add("divCompra");
        li.classList.add("liCard");
        

        produto.componentes.forEach((componentes) =>{
            const liInfos = document.createElement('li');
            liInfos.innerText = componentes;
            liInfos.classList.add("liComponentes");
            ulComponentes.appendChild(liInfos)
        })

        li.appendChild(img);
        li.appendChild(divProd);
        divProd.appendChild(divCarac);
        divProd.appendChild(divCompra);
        divCarac.appendChild(h3);
        divCarac.appendChild(spanSecao);
        divCarac.appendChild(ulComponentes);
        divCarac.appendChild(pPreco);
        divCompra.appendChild(bntCompra);

        ul.appendChild(li);

        bntCompra.addEventListener('click', carrinhoAdd)
    });
}

//adicionando filtros
function filtrarPorHortifruti() {
    
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });
    function totalSecao(produto){
        soma = 0;
        for(let i = 0; i < produto.length; i++){
            soma += produto[i].preco
        }


        return soma
    }
    totalSecao(listaHortifruti)
    montarListaProdutos(listaHortifruti);
 
}
    const botaoMostrarHortifruti = document.querySelector('.hortifruit');
    botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);

function filtrarPorPanificadora() {
    
    const listaPanificadora = produtos.filter((produto) => {
        
        return produto.secao === 'Panificadora';
    });
    function totalSecao(produto){
        soma = 0;
        for(let i = 0; i < produto.length; i++){
            soma += produto[i].preco
        }


        return soma
    }
    totalSecao(listaPanificadora);
    montarListaProdutos(listaPanificadora);   

}
    const botaoMostrarPanificadora = document.querySelector('.panificadora');
     botaoMostrarPanificadora.addEventListener('click', filtrarPorPanificadora);

function filtrarPorLaticinios() {
    const listaLaticinios = produtos.filter((produto) => {
        
        return produto.secao === 'Laticínio';
    });
    function totalSecao(produto){
        soma = 0;
        for(let i = 0; i < produto.length; i++){
            soma += produto[i].preco
        }


        return soma
    }
    totalSecao(listaLaticinios);
    montarListaProdutos(listaLaticinios);
    
}
 const botaoMostrarLaticinios = document.querySelector('.laticinios');
 botaoMostrarLaticinios.addEventListener('click', filtrarPorLaticinios);
 
 function filtrarPortodos() {
    const listaTodos = produtos.filter((produto) => {
        
        return produto
    });
    function totalSecao(produto){
        soma = 0;
        for(let i = 0; i < produto.length; i++){
            soma += produto[i].preco
        }


        return soma
    }
    totalSecao(listaTodos);
    montarListaProdutos(listaTodos);
    
}
 const botaoMostrarTodos = document.querySelector('.todos');
 botaoMostrarTodos.addEventListener('click', filtrarPortodos);

 let texto = document.querySelector('.campoBuscaPorNome')
 let botaoPesquisa = document.querySelector('.estiloGeralBotoes-bnt-busca')

 botaoPesquisa.addEventListener('click', filtrarProduto)
function filtrarProduto(){
    const inputTexto = texto.value.toLowerCase()
    
    const produtoFiltrado = produtos.filter((products) => {
        const nomeLower = products.nome.toLowerCase()
        const secaoLower = products.secao.toLowerCase()
        const catLower = products.categoria.toLowerCase()
        if ( nomeLower.includes(inputTexto)){
            return products
        }
        if ( secaoLower.includes(inputTexto)){
            return products
        }
        if ( catLower.includes(inputTexto)){
            return products
        }
    })
    
    montarListaProdutos(produtoFiltrado)

} 

// carrinho cheio

const divCartCheio = document.createElement('div');
const tagDivProducts_cart = document.createElement('div');
const divUlProdutos = document.createElement('ul');

divUlProdutos.classList.add("tagProductUl")
divUlProdutos.classList.add("hidden")


tagAsidePreco.appendChild(tagDivProducts_cart);
tagDivProducts_cart.appendChild(divUlProdutos);

let soma =  0;

let addCart = [];

    function atualizaCarrinho (){
        divUlProdutos.innerHTML = ""
        for (let i = 0; i < addCart.length; i++){

            const tagLiProduct_cart     = document.createElement("Li");
            const tagImgProduct_cart     = document.createElement("img");
            const tagFigureImg     = document.createElement("figure");
            const tagDivDescr     = document.createElement("div");
            const tagh2Product_cart     = document.createElement("h2");
            const tagPProduct_cart     = document.createElement("p");     
            const tagH3Product_cart     = document.createElement("h3");
            const tagButtonProduct_cart     = document.createElement("button");
           
            tagImgProduct_cart.src = addCart[i].img;
            tagh2Product_cart.innerText  = addCart[i].nome;
            tagPProduct_cart.innerText  = addCart[i].secao;
            tagH3Product_cart.innerText  = "R$" + addCart[i].preco +",00";
            tagButtonProduct_cart.innerText  = "Remover produto";
            tagButtonProduct_cart.id = i;                                         
        
            tagImgProduct_cart.classList.add("imgCart");
            tagFigureImg.classList.add("figure");
            tagLiProduct_cart.classList.add("cardProdutoCarrinhoLi");
            tagh2Product_cart.classList.add("carrinhoCheioH2");
            tagPProduct_cart.classList.add("carrinhoCheioP");
            tagH3Product_cart.classList.add("carrinhoCheioH3");
            tagButtonProduct_cart.classList.add("carrinhoCheioBtn");
            tagDivDescr.classList.add("carrinhoCheioDescr");
            
            divUlProdutos.appendChild(tagLiProduct_cart);
            tagLiProduct_cart.appendChild(tagFigureImg);
            tagFigureImg.appendChild(tagImgProduct_cart);
            tagLiProduct_cart.appendChild(tagDivDescr);
            tagDivDescr.appendChild(tagh2Product_cart);
            tagDivDescr.appendChild(tagPProduct_cart);
            tagDivDescr.appendChild(tagH3Product_cart);
            tagDivDescr.appendChild(tagButtonProduct_cart);

            
            

            tagButtonProduct_cart.addEventListener('click', carrinhoRemove)
        }


        

        soma = 0;

        for(let i = 0; i < addCart.length; i++){
                
            soma += addCart[i].preco
        }

        tagh2Quantidade_cart.innerText = "Quantidade = " + addCart.length; 
            tagh2Total_cart.innerText = "Total = R$" + soma + ",00";  

            
    }
    function carrinhoAdd(event){
        const target = event.target
        const index = target.id
        const produtoClicado = produtos[index]
        addCart.push(produtoClicado)
        divCartCheio.classList.remove("hidden");
        divCartCheio.classList.add("carrinhoCheio")
        tagDivProducts_cart.classList.remove("hidden");
        divSemItem.classList.remove("divSemItem");
        divSemItem.classList.add("hidden");
        divUlProdutos.classList.remove("hidden")

       atualizaCarrinho ()
    }

    function carrinhoRemove(event){
        const target = event.target
        const index = target.id
        addCart.splice(index, 1)

        if(addCart.length == 0 ){
            divSemItem.classList.remove("hidden");
            divSemItem.classList.add("divSemItem");
            tagDivProducts_cart.classList.add("hidden");
            divCartCheio.classList.remove("carrinhoCheio")
            divCartCheio.classList.add("hidden");
        }
       atualizaCarrinho ()

    }
    
    tagAsidePreco.appendChild(divCartCheio);
    const tagDivTotal_cart     = document.createElement("div");
    const tagh2Quantidade_cart     = document.createElement("h2");
    const tagh2Total_cart     = document.createElement("h2");

    tagDivTotal_cart.classList.add("carrinhoCheioDiv");
    tagh2Quantidade_cart.classList.add("carrinhoCheio_DivQnt");
    divCartCheio.classList.add("hidden");
    tagh2Total_cart.classList.add("carrinhoCheio_DivTotal");

    divCartCheio.appendChild(tagDivTotal_cart);
    tagDivTotal_cart.appendChild(tagh2Quantidade_cart);
    tagDivTotal_cart.appendChild(tagh2Total_cart);




montarListaProdutos(produtos)
