const symbols = ["🍀", "💎", "🔥", "🏦", "₿", "Ξ", "π", "7️⃣", "⭐", "🎰"];
let balance = 1000;

function updateBalanceDisplay() {
  document.getElementById("balance").innerText = `${balance} Pi`;
}

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function spinSlot() {
  const slots = document.querySelectorAll(".slot div");
  slots.forEach(slot => {
    slot.textContent = getRandomSymbol();
  });
}

function spin(betAmount) {
  if (balance < betAmount) {
    alert("Solde insuffisant !");
    return;
  }

  balance -= betAmount;
  spinSlot();

  // Exemple de logique de gain : si les 3 sont identiques
  const slots = document.querySelectorAll(".slot div");
  const result = [...slots].map(s => s.textContent);
  if (result[0] === result[1] && result[1] === result[2]) {
    const gain = betAmount * 5;
    balance += gain;
    alert(`Bravo ! Vous avez gagné ${gain} Pi !`);
  }

  updateBalanceDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("balance").innerText = `${balance} Pi`;

  document.getElementById("spin").addEventListener("click", () => spin(10));
  document.getElementById("maxbet").addEventListener("click", () => spin(100));
});
