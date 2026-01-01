# 🎅 Secret Santa Generator

![Noël](https://img.shields.io/badge/Thème-Noël-red?style=for-the-badge&logo=gifts)
![NodeJS](https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express)
![Privacy](https://img.shields.io/badge/Données-Privées-blue?style=for-the-badge&logo=lock)

Un outil simple, local et privé pour organiser le tirage au sort des cadeaux de Noël en famille ou entre amis. Fini les papiers dans le chapeau ! 🎩✨

---

## 🎄 Fonctionnalités

- **Algorithme Intelligent** :
  - Personne ne peut se tirer soi-même.
  - **Gestion des exclusions** : Empêche les couples de s'offrir des cadeaux entre eux (ou toute autre règle personnalisée).
  - Détection automatique des blocages (boucles infinies).
- **Interface Festive** : Une UI simple aux couleurs de Noël avec animation de neige.
- **Confidentialité Totale** : Les données restent chez vous (fichier JSON local), rien n'est stocké dans le Cloud.

---

## 🛠️ Stack Technique

Ce projet est une "Micro-App" conçue pour être légère :

- **Backend** : Node.js avec Express.
- **Frontend** : HTML5, CSS3 (Pas de framework lourd), Vanilla JS.
- **Data** : Fichier JSON local.

---

## 📂 Structure du Projet

```text
secret-santa-app/
└──src
    ├── .gitignore             # Sécurité : empêche l'upload des données privées
    ├── server.js              # Serveur API & Algorithme de tirage
    ├── package.json           # Dépendances
    │
    ├── data/
    │   └── participants.json  # ⚠️ Contient la liste de ta famille (ignoré par Git)
    │
    └── public/                # Le Frontend
        ├── index.html         # Page d'accueil
        ├── style.css          # Styles & Animations
        └── script.js          # Logique d'appel API
```

---

## 🚀 Installation & Démarrage

### 1. Cloner le projet

```bash
git clone [https://github.com/killianmathias/Secret-Santa.git](https://github.com/killian/Secret-Santa.git)
cd Secret-Santa
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les participants

Créez un dossier `data` à la racine, puis un fichier `participants.json` à l'intérieur.
Utilisez ce format pour définir les membres et les exclusions (qui ne peut pas piocher qui) :

```json
[
  {
    "id": "1",
    "name": "Alice",
    "exclusions": ["2"]
  },
  {
    "id": "2",
    "name": "Bob",
    "exclusions": ["1"]
  },
  {
    "id": "3",
    "name": "Charlie",
    "exclusions": []
  }
]
```

> _Dans cet exemple, Alice (ID 1) ne pourra jamais tomber sur Bob (ID 2)._

### 4. Lancer l'application

```bash
node server.js
# Ou si vous avez nodemon
nodemon server.js

```

Rendez-vous sur **`http://localhost:3000`** pour lancer le tirage ! 🎁

---

## 🔒 Sécurité et Données

Ce projet est conçu pour ne **jamais exposer les noms de vos proches** sur Internet.
Le fichier `.gitignore` est configuré pour ignorer le dossier `/data`.

**⚠️ Attention :** Ne forcez jamais l'ajout du fichier `participants.json` sur Git si votre dépôt est public.

---

## 📝 Auteur

Développé pour Noël🎅 par Killian MATHIAS
