import { produtoServicos } from "../services/produtos-services.js";

export const novoProduto = (imageUrl, name, id, price, alt) => {
  const card = document.createElement("li");
  const conteudo = `
        <img src="${imageUrl}" alt="${alt}" class="imagem-produto">
        <span class="produto-nome">${name}</span>
        <span class="span-bold">${price}</span>
        <a href="products.html?id=${id}" class="ver-produto" data-product-id="${id}">Ver produto</a>
    `;

  card.innerHTML = conteudo;

  return card;
};

const preencherProdutos = (sectionId, produtos) => {
  const section = document.getElementById(sectionId);
  const ulProdutos = section.querySelector(".produtos");

  produtos.forEach((produto) => {
    const { imageUrl, name, id, price, alt } = produto;
    const novoCard = novoProduto(imageUrl, name, id, price, alt);
    ulProdutos.appendChild(novoCard);
  });
};

produtoServicos
  .listaProdutos()
  .then((produtos) => {
    const produtosStarWars = produtos.filter(
      (produto) => produto.section === "starWars"
    );
    const produtosConsoles = produtos.filter(
      (produto) => produto.section === "consoles"
    );
    const produtosDiversos = produtos.filter(
      (produto) => produto.section === "diversos"
    );

    preencherProdutos("starWars", produtosStarWars);
    preencherProdutos("consoles", produtosConsoles);
    preencherProdutos("diversos", produtosDiversos);
  })
  .catch((error) => console.log(error));
