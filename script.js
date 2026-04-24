const form = document.getElementById("form");
const service = document.getElementById("service");
const walletBox = document.getElementById("walletBox");

// cacher wallet si pas USDT
service.addEventListener("change", () => {
  if (service.value === "USDT") {
    walletBox.style.display = "block";
  } else {
    walletBox.style.display = "none";
  }
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let nom = document.getElementById("nom").value;
  let montant = document.getElementById("montant").value;
  let numero = document.getElementById("numero").value;
  let wallet = document.getElementById("wallet").value;
  let clientWhatsapp = document.getElementById("clientWhatsapp").value;
  let messageUser = document.getElementById("message").value;
  let type = service.value;

  let message = `📥 Nouvelle demande:%0A
Service: ${type}%0A
Nom: ${nom}%0A
Montant: ${montant} HTG%0A
Numéro: ${numero}%0A`;

  if (type === "USDT") {
    message += `Wallet: ${wallet}%0A`;
  }

  message += `Client WhatsApp: ${clientWhatsapp}%0A
Message: ${messageUser}`;

  let url = `https://wa.me/509XXXXXXXX?text=${message}`;

  window.open(url, "_blank");
});
