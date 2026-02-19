const popup = document.getElementById("mandatory-popup");
const acceptBtn = document.getElementById("accept-btn");
const declineBtn = document.getElementById("decline-btn");

// CONFIGURE SEUS LINKS AQUI
const ACCEPT_LINK = "https://seudominio.com"; // para onde vai ao aceitar
const DECLINE_LINK = "https://www.google.com"; // para onde vai ao recusar

// Bloqueia scroll
document.body.classList.add("locked");

// Se já escolheu antes
if (localStorage.getItem("popupChoice")) {
  popup.style.display = "none";
  document.body.classList.remove("locked");
}

// Clique Accept
acceptBtn.addEventListener("click", function(e) {
  e.preventDefault();
  localStorage.setItem("popupChoice", "accepted");
  window.location.href = ACCEPT_LINK;
});

// Clique Decline
declineBtn.addEventListener("click", function(e) {
  e.preventDefault();
  localStorage.setItem("popupChoice", "declined");
  window.location.href = DECLINE_LINK;
});

const closeBtn = document.getElementById("close-popup");

// Fechar no X
closeBtn.addEventListener("click", function() {
  localStorage.setItem("popupChoice", "closed");
  popup.style.display = "none";
  document.body.classList.remove("locked");
});
