const popup = document.getElementById("mandatory-popup");
const acceptBtn = document.getElementById("accept-btn");
const declineBtn = document.getElementById("decline-btn");
const closeBtn = document.getElementById("close-popup");

// LINKS (COLOQUE SEU LINK AQUI)
const OFFER_LINK = "https://www.checkout-ds24.com/redir/533733/Lucas2015/";

// Accept
acceptBtn.addEventListener("click", function() {
  window.location.href = OFFER_LINK;
});

// Decline
declineBtn.addEventListener("click", function() {
  window.location.href = OFFER_LINK;
});

// Fechar no X (libera página sem redirecionar)
closeBtn.addEventListener("click", function() {
  popup.style.display = "none";
  window.location.href = OFFER_LINK;
});
