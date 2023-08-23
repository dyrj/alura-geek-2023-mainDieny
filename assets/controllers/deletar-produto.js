import { produtoServicos } from "../services/produtos-services.js";

const botoesDeletar = document.querySelectorAll(".deletar");
botoesDeletar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const idProduto = botao.parentElement.dataset.id;
    deletarProduto(idProduto);
  });
});

export function deletarProduto(idProduto) {
  produtoServicos
    .deletarProduto(idProduto)
    .then(() => {
      console.log("Produto deletado com sucesso!");

      const produtoRemovido = document.querySelector(
        `[data-id="${idProduto}"]`
      );
      if (produtoRemovido) {
        produtoRemovido.remove();
      }
    })
    .catch((error) => console.error("Erro ao deletar produto:", error));
}

export function botaoApareceDelet() {
  const listaProdutos = document.querySelector(".lista-todos-produtos");

  listaProdutos.addEventListener("click", (event) => {
    const botaoRemove = event.target.closest(".botao-remover");
    if (botaoRemove) {
      const divDeleta = document.createElement("div");
      divDeleta.classList.add("removendo");
      divDeleta.innerHTML = `
                <span class="span-remover">Tem certeza?</span>
                <div class="div-remove">
                    <button class="deletar">Remover</button>
                    <button class="nao-deletar">Não</button>
                </div>
            `;

      const cardProduto = botaoRemove.closest("li");
      cardProduto.appendChild(divDeleta);

      divDeleta.style.display = "flex";

      const botaoConfirmarRemocao = divDeleta.querySelector(".deletar");
      botaoConfirmarRemocao.addEventListener("click", () => {
        const idProduto = cardProduto.dataset.id;
        deletarProduto(idProduto);
        divDeleta.remove();
      });

      const botaoCancelarRemocao = divDeleta.querySelector(".nao-deletar");
      botaoCancelarRemocao.addEventListener("click", () => {
        divDeleta.remove();
      });
    }
  });
}
