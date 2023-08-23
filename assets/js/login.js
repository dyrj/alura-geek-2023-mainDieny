document
  .querySelector(".form-login")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "admin") {
      window.location.href = "products.html";
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  });

