import { produtoServicos } from "../services/produtos-services.js";

function salvarProduto(event) {
  event.preventDefault();

  const urlImagem = document.querySelector("input[name='url']").value;
  const nomeProduto = document.querySelector("input[name='nome']").value;
  let precoProduto = document.querySelector("input[name='price']").value;
  const descricaoProduto = document.querySelector(
    "textarea[name='descricao']"
  ).value;

  precoProduto = parseFloat(precoProduto.replace(/[^\d]/g, ""));
  precoProduto = precoProduto.toFixed(2);

  const novoProduto = {
    imageUrl: urlImagem,
    name: nomeProduto,
    price: precoProduto,
    description: descricaoProduto,
  };

  produtoServicos
    .criarProduto(novoProduto)
    .then((produtoCriado) => {
      console.log("Novo produto criado:", produtoCriado);
      window.location.href = "products.html";
    })
    .catch((error) => console.error("Erro ao criar novo produto:", error));
}

const formAdicionarProduto = document.querySelector(
  ".adicionar-produto-formulario"
);
formAdicionarProduto.addEventListener("submit", salvarProduto);
