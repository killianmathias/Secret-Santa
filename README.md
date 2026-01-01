# 🎅 Secret Santa Generator

A simple, local, and private tool to organize Secret Santa gift exchanges for family and friends. No more drawing names from a hat! 🎩✨

---

## 🎄 Features

- **Smart Algorithm**:
  - No one can draw themselves.
  - **Exclusion Management**: Prevents couples from picking each other (or any other custom rule).
  - Automatic deadlock detection (infinite loops).
- **Festive Interface**: A simple Christmas-themed UI with snow animation.
- **Total Privacy**: Data stays with you (local JSON file), nothing is stored in the Cloud.

---

## 🛠️ Tech Stack

This project is a "Micro-App" designed to be lightweight:

- **Backend**: Node.js with Express.
- **Frontend**: HTML5, CSS3 (No heavy framework), Vanilla JS.
- **Data**: Local JSON file.

---

## 📂 Project Structure

```text
secret-santa-app/
└──src
    ├── .gitignore             # Security: prevents uploading private data
    ├── server.js              # API Server & Draw Algorithm
    ├── package.json           # Dependencies
    │
    ├── data/
    │   └── participants.json  # ⚠️ Contains your family list (ignored by Git)
    │
    └── public/                # The Frontend
        ├── index.html         # Homepage
        ├── style.css          # Styles & Animations
        └── script.js          # API Call Logic

```

---

## 🚀 Installation & Usage

### 1. Clone the project

```bash
git clone [https://github.com/killianmathias/Secret-Santa.git](https://github.com/killianmathias/Secret-Santa.git)
cd Secret-Santa
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure participants

Create a `data` folder at the root, then a `participants.json` file inside it.
Use the following format to define members and exclusions (who cannot pick whom):

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

> _In this example, Alice (ID 1) will never be able to pick Bob (ID 2)._

### 4. Launch the application

```bash
node server.js
# Or if you have nodemon
nodemon server.js
```

Go to **`http://localhost:3000`** to start the draw! 🎁

---

## 🔒 Security and Data

This project is designed to **never expose your loved ones' names** on the Internet.
The `.gitignore` file is configured to ignore the `/data` folder.

**⚠️ Warning:** Never force add the `participants.json` file to Git if your repository is public.

---

## 📝 Author

Developed for Christmas🎅 by Killian MATHIAS
