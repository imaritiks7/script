

// Criando o elemento de título da loja
const tituloLoja = document.createElement("h1");
tituloLoja.id = "titulo"; // REQUISITO: O título simples deve conter o id "titulo"
tituloLoja.innerText = "Lojinha Tech - Os Melhores Acessórios";

// Criando o elemento container que representará o produto à venda
const containerProduto = document.createElement("div");
containerProduto.className = "produto-container";


containerProduto.innerHTML = `
    <h2 class="produto-nome">Teclado Mecânico RGB</h2>
    <p class="produto-descricao">Teclado mecânico compacto com switches personalizáveis, iluminação RGB vibrante e conexão USB-C removível.</p>
    <p class="produto-preco">Preço: <strong>R$ 259,90</strong></p>
`;



const corpoDaPagina = document.querySelector("body");


corpoDaPagina.appendChild(tituloLoja);

corpoDaPagina.appendChild(containerProduto);