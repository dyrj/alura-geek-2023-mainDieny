import { produtoServicos } from "../services/produtos-services.js";

function editarProduto() {
  const urlParams = new URLSearchParams(window.location.search);
  const idProduto = urlParams.get("id");

  produtoServicos
    .getProdutoPorId(idProduto)
    .then((produto) => {
      const mainEditaProduto = document.querySelector(".editar-produto");

      mainEditaProduto.innerHTML = `
            <div class="editar-produtos">
                <form action="submit" class="editar-produto-formulario">
                    <h3>Editar produto: <i>ID</i> = ${produto.id}</h3>
                    <div class="url-imagem">
                        <input type="url" name="url" value="${produto.imageUrl}" required>
                        <label>URL da imagem</label>
                    </div>
                    <div class="categoria">
                        <input type="text" name="categoria" value="${produto.section}" required>
                        <label>Categoria</label>
                    </div>
                    <div class="nome-produto-edita">
                        <input type="text" name="nome" value="${produto.name}" required>
                        <label>Nome do produto</label>
                    </div>
                    <div class="preco-produto-edita">
                        <input type="text" name="price" value="${produto.price}" required>
                        <label>Preço</label>
                    </div>
                    <div class="descricao-edita">
                        <textarea name="descricao" required>${produto.description}</textarea>
                        <label>Descrição do produto</label>
                    </div>
                    <button type="submit" class="salvar-edicao">Salvar</button>
                </form>
            </div>
            `;

      const btnSalvarEdicao = document.querySelector(".salvar-edicao");
      btnSalvarEdicao.addEventListener("click", () => salvarEdicao(idProduto));
    })
    .catch((error) =>
      console.error("Erro ao carregar produto para edição:", error)
    );
}

function salvarEdicao(idProduto) {
  const urlImagem = document.querySelector("input[name='url']").value;
  const categoria = document.querySelector("input[name='categoria']").value;
  const nomeProduto = document.querySelector("input[name='nome']").value;
  const precoProduto = document.querySelector("input[name='price']").value;
  const descricaoProduto = document.querySelector(
    "textarea[name='descricao']"
  ).value;

  const produtoAtualizado = {
    imageUrl: urlImagem,
    section: categoria,
    name: nomeProduto,
    price: precoProduto,
    description: descricaoProduto,
  };

  produtoServicos
    .atualizarProduto(idProduto, produtoAtualizado)
    .then((produto) => {
      console.log("Produto atualizado com sucesso:", produto);
      window.location.href = "products.html";
    })
    .catch((error) => console.error("Erro ao atualizar produto:", error));
}

editarProduto();
