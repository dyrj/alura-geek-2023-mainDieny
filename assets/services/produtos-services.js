const listaProdutos = () => {
  return fetch("https://64d03917ff953154bb78b5aa.mockapi.io/produto")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

const getProdutoPorId = (id) => {
  return fetch(`https://64d03917ff953154bb78b5aa.mockapi.io/produto/${id}`)
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

const atualizarProduto = (id, produtoAtualizado) => {
  return fetch(`https://64d03917ff953154bb78b5aa.mockapi.io/produto/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produtoAtualizado),
  })
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

const criarProduto = (novoProduto) => {
  return fetch("https://64d03917ff953154bb78b5aa.mockapi.io/produto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(novoProduto),
  })
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

const deletarProduto = (idProduto) => {
  return fetch(
    `https://64d03917ff953154bb78b5aa.mockapi.io/produto/${idProduto}`,
    {
      method: "DELETE",
    }
  )
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

export const produtoServicos = {
  listaProdutos,
  getProdutoPorId,
  atualizarProduto,
  criarProduto,
  deletarProduto,
};

