document.getElementById("btn-tirage").addEventListener("click", async () => {
  const btn = document.getElementById("btn-tirage");
  const resultArea = document.getElementById("result-area");
  const list = document.getElementById("participants-list");
  const errorMsg = document.getElementById("error-message");

  btn.disabled = true;
  btn.innerHTML = '<span class="icon">⏳</span> Mélange en cours...';
  resultArea.classList.add("hidden");
  errorMsg.classList.add("hidden");
  list.innerHTML = "";

  try {
    const response = await fetch("/tirage");
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Erreur serveur");
    }

    if (data.tirage && data.tirage.length > 0) {
      data.tirage.forEach((pair) => {
        const li = document.createElement("li");
        li.className = "result-item";
        li.innerHTML = `
                    <span class="giver">🎅 ${pair.giver.name}</span>
                    <span class="arrow">➜</span>
                    <span class="receiver">🎁 ${pair.receiver.name}</span>
                `;
        list.appendChild(li);
      });
      resultArea.classList.remove("hidden");
    } else {
      throw new Error("Aucun résultat reçu.");
    }
  } catch (error) {
    console.error(error);
    errorMsg.textContent = "Oups ! " + error.message;
    errorMsg.classList.remove("hidden");
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<span class="icon">🔄</span> Relancer le tirage';
  }
});
