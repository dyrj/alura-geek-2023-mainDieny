import { produtoServicos } from "../services/produtos-services.js";
import {
  deletarProduto,
  botaoApareceDelet,
} from "../controllers/deletar-produto.js";

function criaEstrutura() {
  const mainProduto = document.querySelector(".produto-especifico");

  mainProduto.innerHTML = `
    <div class="todos-produtos">
        <div class="titulo titulo-espaço">
            <h3>Todos os produtos</h3>
            <a href="add-products.html">Adicionar produto</a>
        </div>
        <ul class="lista-todos-produtos"></ul>
    </div>
    `;

  botaoApareceDelet();
  carregarTodosProdutos();
}

function controiCard(imageUrl, name, price, id, alt) {
  const produto = document.createElement("li");
  produto.setAttribute("data-id", id);

  produto.innerHTML = `
    <img src="${imageUrl}" alt="${alt}" class="imagem-produto">
    <span class="produto-nome">${name}</span>
    <span class="span-bold">R$ ${price}</span>
    <span>ID = ${id}</span>
    <a class="editar" href="edit.html?id=${id}">Editar</a>
    <button class="botao-remover">Deletar</button>
    `;

  return produto;
}

function carregarTodosProdutos() {
  const listaProdutos = document.querySelector(".lista-todos-produtos");

  produtoServicos
    .listaProdutos()
    .then((produtos) => {
      produtos.forEach((produto) => {
        const cardProduto = controiCard(
          produto.imageUrl,
          produto.name,
          produto.price,
          produto.id,
          produto.alt
        );
        listaProdutos.appendChild(cardProduto);
      });
    })
    .catch((error) => console.error("Erro ao carregar produtos:", error));
}

criaEstrutura();
