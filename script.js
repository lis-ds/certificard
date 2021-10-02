// Função p/ alterar o tema escuro
function mudaTema() {
  document.body.classList.toggle("dark");
}

// Exibe o popup com o Codepen Embed
function showPopup(id) {
  document.getElementById(id).style.visibility = "visible";
  document.getElementById("popup-fundo").style.visibility = "visible";
}

// Esconde o popup com o Codepen Embed
function hidePopup(id) {
  document.getElementById(id).style.visibility = "hidden";
  document.getElementById("popup-fundo").style.visibility = "hidden";
}