# 💎 Suraj Manani — Premium Developer Portfolio

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Icons](https://img.shields.io/badge/React_Icons-5.5-orange?logo=react&logoColor=white)](https://react-icons.github.io/react-icons/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A high-fidelity, responsive personal portfolio website designed for full-stack developers. Featuring a premium **dark glassmorphic design system**, fully interactive features, dynamic routing, and custom layout highlights.

---

## 🎨 Key Features & Design Highlights

### 💻 1. Interactive VS Code Mockup (Hero Card)
*   **Fully Clickable File Explorer Tabs**: Switch dynamically between `Developer.jsx` (functional profile), `skills.json` (technical categories), and `interests.css` (philosophy & status).
*   **Authentic IDE Details**: Styled with macOS window buttons, sidebar tab indicators, custom vertical line numbers, syntactical highlighting, and a status bar indicating the git branch (`main*`) and file metadata.

### 📊 2. Dynamic Projects Showcase
*   **Realistic Preview Images**: Displays actual dashboard screenshots of featured projects (**Finoire**, **Quizara**, and **TechNest**) migrated to static assets.
*   **Interactive Zoom & Overlay Hover Effects**: Zoom transition animations on hover (`scale-[1.03]`) combined with HSL border gradients and clean action overlays.
*   **Direct External Integrations**: Supports instant link paths to GitHub repositories and live deployment environments.

### 🎓 3. Timeline-Based Academic Log
*   **Uniform Layout**: Interactive chronological list linking **MCA**, **BCA**, and **HSC** milestones.
*   **Icon Badges**: Centered category icons (graduation cap and trophy) adjacent to timeline years.

### ✉️ 4. Contact Form & Connect Hub
*   **Direct Forms**: Responsive inputs for messages, questions, and bookings.
*   **Social Connectivity**: Direct integration for GitHub, LinkedIn, and email.

---

## 🛠️ Technology Stack

| Layer | Technologies | Description |
| :--- | :--- | :--- |
| **Frontend Core** | React 19, Vite 6, JavaScript (ES6+) | Modern React layout with hot module replacement (HMR) for development. |
| **Styling** | Tailwind CSS v4, Vanilla CSS | Next-gen utility engine configured with custom HSL tokens, animations, and HSL glassmorphism classes. |
| **Icons** | React Icons (FontAwesome) | High-contrast vector SVG icons. |

---

## 📂 Project Structure

```bash
My Portfolio/
├── assets/                  # Original raw design assets
├── public/                  # Static served assets
│   ├── projects/            # Project preview screenshots (finoire.png, etc.)
│   └── favicon.svg          # Browser tab icon
│
├── src/
│   ├── components/          # Reusable UI Components
│   │   ├── About.jsx        # Bio, metrics, and summary
│   │   ├── Background.jsx   # Ambient moving blob animation background
│   │   ├── Contact.jsx      # Message form with validations
│   │   ├── Education.jsx    # Unified timeline list of academic accomplishments
│   │   ├── Footer.jsx       # Bottom layout and copy
│   │   ├── Hero.jsx         # Intro sections and interactive VS Code IDE mockup
│   │   ├── Navbar.jsx       # Responsive header with smooth navigation
│   │   ├── Projects.jsx     # Card listing for works
│   │   └── ScrollProgress.jsx# Top reading bar indicator
│   │
│   ├── data/
│   │   └── portfolio.js     # Single configuration source file for content updates
│   │
│   ├── App.jsx              # Main layout and scroll IntersectionObserver
│   ├── index.css            # Tailwind directives, theme variables, and global classes
│   └── main.jsx             # Entrypoint bundle script
│
├── index.html               # Main HTML wrapper
├── package.json             # Core dependency settings
└── vite.config.js           # Vite builder parameters
```

---

## 🔧 Local Running & Build

### Step 1: Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Step 3: Build for Production
To generate verified, static compiled production files inside the `dist` directory:
```bash
npm run build
```

---

## ✍️ Customizing Content

You can customize almost all text, details, skills, and projects on this website without changing the React component logic. 

Simply open [`src/data/portfolio.js`](file:///c:/Users/suraj/Desktop/My%20Portfolio/src/data/portfolio.js) and update the corresponding key-value fields:
*   **`personalInfo`**: Change your name, tagline, email, and social profile links.
*   **`about`**: Edit your bio descriptions and metrics tags.
*   **`skills`**: Add or remove skill percentages and items.
*   **`projects`**: Configure your title, description, features list, icons, github paths, and live vercel/netlify links.
*   **`education`**: Update your graduation dates, universities, and certificates.
