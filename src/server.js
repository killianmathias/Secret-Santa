const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "data", "participants.json");

app.use(express.static("public"));
app.use(express.json());

app.get("/tirage", (req, res) => {
  let currentParticipants = [];
  if (fs.existsSync(DATA_FILE)) {
    try {
      const data = fs.readFileSync(DATA_FILE);
      currentParticipants = JSON.parse(data);
    } catch (e) {
      return res.status(500).send({ error: "Erreur de lecture du JSON" });
    }
  }

  if (currentParticipants.length === 0) {
    return res.send({ message: "Aucun participant trouvé.", tirage: [] });
  }

  try {
    let tirage = calculateSecretSanta(currentParticipants);
    res.send({ tirage: tirage });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Secret Santa listening on port ${PORT}`);
});

function calculateSecretSanta(participantsList) {
  let receivers = [...participantsList];
  let isValid = false;

  let attempts = 0;
  const MAX_ATTEMPTS = 1000;

  while (!isValid && attempts < MAX_ATTEMPTS) {
    attempts++;

    receivers = receivers.sort(() => Math.random() - 0.5);

    isValid = participantsList.every((giver, index) => {
      const receiver = receivers[index];

      if (giver.id === receiver.id) {
        return false;
      }

      if (giver.exclusions && giver.exclusions.includes(receiver.id)) {
        return false;
      }

      return true;
    });
  }

  if (!isValid) {
    throw new Error(
      "Impossible de trouver une combinaison valide avec ces exclusions. Essayez de réduire les contraintes."
    );
  }

  return participantsList.map((giver, index) => ({
    giver: giver,
    receiver: receivers[index],
  }));
}
