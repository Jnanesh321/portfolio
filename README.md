# portfolio

> **Jnanesh Sharma H.** — Computer Science Engineering Student @ VCET (VTU) · Backend Developer & Systems Engineer · India

Modern, interactive developer portfolio and REST API server engineered with **Node.js** and **Express.js**, featuring live interactive project modals, multi-universe CSS theme engines, an interactive developer terminal card, and a printable technical resume.

---

## 🚀 Key Features

* **⚡ Express.js Backend**: Modular architecture with route controllers, structured JSON middleware, and RESTful API endpoints (`/api/projects`, `/api/contact`, `/api/system`).
* **🎨 Interactive Universe Engine**: Dynamic theme switching between 6 curated aesthetic environments:
  * 🌟 **Default Obsidian**: Sleek, high-contrast dark mode with neon accents.
  * 🌾 **Payaswini AgriTech**: Emerald harvest theme with agricultural SVG fleet icons.
  * ⛏️ **Minecraft AIBridge**: Pixel-art 8-bit aesthetic powered by custom Paper Java plugin assets.
  * ⚡ **Codex Cyber**: Deep sapphire and electric indigo styling.
  * 📚 **Scholarly Cyan**: MERN e-library academic blue theme.
  * 🧬 **Bio-Matrix**: Crimson slate attendance management theme.
* **🔦 Torch Dark/Light Mode**: Interactive cave-banter toggle with animated SVG torches and ambient light mode styling.
* **⌨️ Terminal Typewriter Hero**: Multi-line terminal-style typing animation representing engineering focus and credentials.
* **📄 Integrated Resume & Print Engine**: Clean, ATS-friendly printable resume route at `/resume` with custom CSS print stylesheets for one-click PDF export.
* **▲ Vercel Ready**: Preconfigured with `vercel.json` and `api/index.js` serverless function adapter for seamless deployment.

---

## 🛠️ Tech Stack

* **Runtime & Framework**: Node.js, Express.js (v5)
* **Frontend**: HTML5, Vanilla CSS3 (Custom Properties & Design Tokens), Vanilla JavaScript (ES6+)
* **Typography**: Syne, Space Mono, Press Start 2P (Google Fonts)
* **Styling**: Glassmorphism, Micro-animations, CSS Grid & Flexbox, Custom SVG Cursors

---

## 📂 Project Structure

```text
portfolio/
├── api/
│   └── index.js              # Vercel serverless function entrypoint
├── public/
│   ├── assets/               # SVG icons, cursors, torch assets, theme graphics
│   ├── index.html            # Main portfolio web interface
│   └── resume.html           # Dedicated printable resume page
├── src/
│   ├── app.js                # Express app entrypoint & middleware setup
│   ├── config/               # Environment & server configuration
│   ├── controllers/          # Request handlers (projects, contact, system)
│   ├── data/                 # Rich project schemas, architecture specs, code samples
│   ├── middlewares/          # Logger, error handlers, request validation
│   ├── routes/               # Modular Express router endpoints
│   └── services/             # Business logic & metrics aggregation
├── vercel.json               # Vercel edge deployment and routing configuration
└── package.json
```

---

## 💻 Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Jnanesh321/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. Open your browser:
   * **Portfolio**: [http://localhost:3000/](http://localhost:3000/)
   * **Resume**: [http://localhost:3000/resume](http://localhost:3000/resume)
   * **API Projects**: [http://localhost:3000/api/projects](http://localhost:3000/api/projects)

---

## ▲ Deploying to Vercel

1. Push this repository to GitHub (`https://github.com/Jnanesh321/portfolio.git`).
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `portfolio` repository.
4. Keep the default settings and click **Deploy**.
5. Vercel will automatically build the serverless functions in `/api` and serve static assets directly from the global CDN!

---

## 📬 Contact

* **Email**: [jnaneshsharmah@gmail.com](mailto:jnaneshsharmah@gmail.com)
* **GitHub**: [@Jnanesh321](https://github.com/Jnanesh321)
* **Location**: India
