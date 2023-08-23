document
  .querySelector(".form-footer")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

function validateForm() {
  const nameInput = document.querySelector('input[name="name"]');
  const messageTextarea = document.querySelector('textarea[name="message"]');
  const errorMsg = document.getElementById("error-msg");
  const successMsg = document.getElementById("success-msg");
  const buttonText = document.querySelector(".botao-footer");

  if (nameInput.value.trim() === "" || messageTextarea.value.trim() === "") {
    errorMsg.textContent = "Por favor, preencha todos os campos obrigatórios.";
    errorMsg.style.display = "block";
    successMsg.style.display = "none";
    buttonText.textContent = "Enviar Mensagem";
  } else {
    errorMsg.style.display = "none";
    successMsg.textContent = "Formulário enviado com sucesso!";
    successMsg.style.display = "block";
    buttonText.textContent = "Enviado";

    setTimeout(function () {
      successMsg.style.display = "none";
      buttonText.textContent = "Enviar Mensagem";
    }, 3000);

    nameInput.value = "";
    messageTextarea.value = "";
  }
}

