const ulResultadosPesquisa = document.getElementById("resultadosPesquisa");
const barraPesquisaInput = document.querySelector(".barra-pesquisa");
const header = document.querySelector("header");

function pesquisar() {
  const termoPesquisa = document
    .querySelector(".barra-pesquisa")
    .value.toLowerCase();
  const produtos = document.querySelectorAll(".produtos li");
  const produtosFiltrados = Array.from(produtos).filter((produto) => {
    const nomeProduto = produto
      .querySelector(".produto-nome")
      .textContent.toLowerCase();
    return nomeProduto.includes(termoPesquisa);
  });
  exibirResultadosPesquisa(produtosFiltrados);
}

function exibirResultadosPesquisa(resultados) {
  ulResultadosPesquisa.innerHTML = "";

  if (
    resultados.length === 0 ||
    !document.querySelector(".barra-pesquisa").value.trim()
  ) {
    ulResultadosPesquisa.style.display = "none";
  } else {
    resultados.forEach((resultado) => {
      const nomeProduto = resultado.querySelector(".produto-nome").textContent;
      const idProduto = resultado
        .querySelector(".ver-produto")
        .getAttribute("data-product-id");
      const link = document.createElement("a");
      link.textContent = nomeProduto;
      link.href = `products.html?id=${idProduto}`;
      ulResultadosPesquisa.appendChild(link);
    });
    ulResultadosPesquisa.style.display = "flex";
  }
}

function lidarComPesquisa() {
  pesquisar();
}

barraPesquisaInput.addEventListener("input", lidarComPesquisa);
document.addEventListener("click", (event) => {
  if (event.target !== barraPesquisaInput) {
    ulResultadosPesquisa.style.display = "none";
  }
});

// MOBILE
const buttonLogin = document.querySelector(".button-login");
const ajusteBarraPesquisa = document.querySelector(".ajuste-barra-pesquisa");
const logoAluraGeek = document.querySelector(".lado-esquerdo a");

const botaoLupa = document.querySelector(".botao-lupa");
const botaoLupaProduto = document.querySelector(".botao-lupa-produto");

botaoLupa.addEventListener("click", () => {
  botaoLupa.classList.toggle("lupa-mobile");
  ajusteBarraPesquisa.classList.toggle("mobile");
  ulResultadosPesquisa.classList.toggle("mobile-resultado-pesquisa");

  if (buttonLogin.style.display === "none") {
    buttonLogin.style.display = "block";
    ajusteBarraPesquisa.style.display = "none";
  } else {
    buttonLogin.style.display = "none";
    ajusteBarraPesquisa.style.display = "flex";
  }

  const headerWidth = document.querySelector("header").offsetWidth;
  if (headerWidth < 380) {
    header.style.height = "80px";
    logoAluraGeek.style.display =
      logoAluraGeek.style.display === "none" ? "block" : "none";
  }
});
