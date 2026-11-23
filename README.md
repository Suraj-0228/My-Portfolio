# 💎 Suraj Manani — Premium Developer Portfolio

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Icons](https://img.shields.io/badge/React_Icons-5.5-orange?logo=react&logoColor=white)](https://react-icons.github.io/react-icons/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A high-fidelity, production-ready personal developer portfolio built with **React 19**, **Vite 6**, and **Tailwind CSS v4**. Styled with a dark glassmorphic design system, fluid scroll animations, interactive modals, and recruiter-focused workflows.

---

## 🎨 Key Features & Architecture Highlights

### 💻 1. Dual-Mode Hero Section
*   **Mode Switcher `[ 💻 VS Code | 👤 Profile ]`**: Allows recruiters and visitors to toggle between technical code and personal identity in real time.
*   **Interactive VS Code Editor Mockup**:
    *   Clickable file explorer tabs: `Developer.jsx` (React profile component), `skills.json` (categorized tech stack), and `interests.css` (engineering philosophy & work ethic).
    *   Editor UI elements: macOS window controls, vertical line numbers (1–14), status bar with git branch (`main*`), and syntax highlighting.
*   **Developer Identity Profile Card**:
    *   Stylized avatar halo, role details, location chips, availability badge (`🟢 Open for Internships & Projects`), core competency tags, and quick-action buttons.
*   **Recruiter CTAs**: Direct **"Resume / CV"** button alongside *"View Projects"* and *"Get In Touch"*.

### 🧩 2. Interactive Bento Grid ("What I Do")
*   Structured 2x2 Bento Box layout highlighting core specializations:
    *   **Frontend Engineering** (React 19, Tailwind CSS v4, Responsive UI)
    *   **Full-Stack & APIs** (Node.js, Express, PHP 8.x, REST APIs)
    *   **Database Architecture** (MongoDB Atlas, MySQL, PDO Prepared Statements)
    *   **Modern Deployment** (Vercel, Render, Git/GitHub)
*   Equipped with category color accents, icons, and tech stack chips.

### 🛠️ 3. Branded Technical Toolkit
*   Replaced generic percentage bars with branded tech cards featuring official SimpleIcons & FontAwesome logos.
*   Proficiency level tags (`Core Stack`, `Advanced`, `Proficient`, `Production`).
*   Smooth intersection-observed progress indicators with glowing gradients.
*   **Technologies & Frameworks at a Glance**: Quick-access horizontal pill bar for fast stack appraisal.

### 📊 4. Projects Showcase & Screenshot Lightbox
*   **Featured Projects**: Detailed showcases for **Finoire** (MERN Stack Wealth Management), **Quizara** (PHP/MySQL LMS & Quiz Assessment Platform), and **TechNest** (Gadget E-Commerce Platform).
*   **High-Res Screenshot Lightbox**: Clicking any project preview opens a full-screen, high-resolution modal with project headers, GitHub source links, and Live Demo buttons. Dismissible via `ESC` or backdrop click.
*   **Dual View Alternating Layout**: Responsive layout with tech tags, key feature bullet lists, and live deployment links.

### 🎓 5. Dedicated Education & Achievements Layout
*   **Academic Journey Timeline**: Connected chronological timeline for **MCA** (Postgraduate), **BCA** (Undergraduate), and **HSC** (Higher Secondary).
*   **Honors & Recognition Showcase**: Distinct glowing amber card highlighting the **3rd Rank — "Creators Mind" Techfest** honor for the *SmartHaven* project, including competition tags and rapid prototyping notes.

### ✉️ 6. Functional Contact System & Direct Delivery
*   **Automated Email Submissions**: Configurable via **Web3Forms** (zero backend setup needed; deliveries route straight to `surajmanani028@gmail.com`).
*   **Intelligent Mail Client Fallback**: Automatically opens the visitor's default email client prefilled with your address, subject, and body if offline or if no API key is set.
*   **Quick Actions**: One-click copy email button with feedback tooltip.

### 🌐 7. SEO & OpenGraph Social Sharing
*   Optimized `index.html` with complete OpenGraph (`og:title`, `og:description`, `og:image`) and Twitter Card (`summary_large_image`) tags for rich visual previews when sharing on LinkedIn, WhatsApp, or Twitter.

---

## 🛠️ Technology Stack

| Layer | Technologies & Packages |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/), [Vite 6](https://vite.dev/), JavaScript (ES6+) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/), Glassmorphism HSL Utilities, Custom Animations |
| **Iconography** | [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome 6, SimpleIcons, HeroIcons) |
| **Asset Delivery** | Static Assets (`public/projects/`, `public/resume.pdf`) |

---

## 📂 Project Structure

```bash
My Portfolio/
├── public/                  # Static served assets
│   ├── projects/            # High-resolution dashboard screenshots
│   │   ├── finoire.png      # Finoire dashboard screenshot
│   │   ├── quizara.png      # Quizara dashboard screenshot
│   │   └── technest.png     # TechNest dashboard screenshot
│   ├── favicon.svg          # Custom SVG favicon
│   └── resume.pdf           # Downloadable Resume / CV
│
├── src/
│   ├── components/          # Reusable UI Section Components
│   │   ├── About.jsx        # Bio, stats, and 4-card Services Bento Grid
│   │   ├── Background.jsx   # Ambient moving blob animation background & grid
│   │   ├── Contact.jsx      # Functional contact form (Web3Forms + Mailto)
│   │   ├── Education.jsx    # 2-column Academic Timeline & Achievements card
│   │   ├── Footer.jsx       # Bottom layout, quick links, and social connect
│   │   ├── Hero.jsx         # Hero section with dual-mode [VS Code | Profile] card
│   │   ├── Navbar.jsx       # Fixed header with active blur pill & Resume CTA
│   │   ├── Projects.jsx     # Filterable project list with Lightbox Modal
│   │   ├── ScrollProgress.jsx # Top reading progress bar
│   │   └── Skills.jsx       # Branded technical toolkit with SimpleIcons
│   │
│   ├── data/
│   │   └── portfolio.js     # Single configuration source file for all content
│   │
│   ├── App.jsx              # Main layout wrapper & IntersectionObserver reveal
│   ├── index.css            # Tailwind directives, theme variables, and glass classes
│   └── main.jsx             # React DOM entrypoint
│
├── index.html               # HTML wrapper with SEO, fonts, & OpenGraph metadata
├── package.json             # Core dependency settings & scripts
├── vite.config.js           # Vite builder parameters
└── README.md                # Project documentation
```

---

## 🔧 Local Development & Build

### 1. Install Dependencies
Ensure [Node.js](https://nodejs.org/) (v18+ recommended) is installed:
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
To generate optimized production assets in the `dist/` directory:
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✍️ Customizing Content

You can customize almost all text, details, skills, links, and projects by editing a single file: [`src/data/portfolio.js`](file:///c:/Users/suraj/Desktop/My%20Portfolio/src/data/portfolio.js).

*   **`personalInfo`**:
    *   `resumeUrl`: Set path to your PDF (`/resume.pdf` or Google Drive share link).
    *   `web3FormsKey`: Add your free access key from [web3forms.com](https://web3forms.com) to receive form submissions in your inbox.
    *   Name, tagline, email, location, GitHub, and LinkedIn links.
*   **`about`**: Paragraphs, metrics, and experience highlights.
*   **`skills`**: Technical categories, skill names, and proficiency values.
*   **`projects`**: Project titles, subtitles, category (`mern` / `php`), description, feature bullets, tech badges, GitHub links, and live URLs.
*   **`education`**: Degree timeline entries, institutions, descriptions, and competition honors (`highlight: true`).

---

## 🚀 Deployment to Vercel

1. Push your latest code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Upgrade portfolio with modern layout and features"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your portfolio repository (Vercel automatically detects the Vite preset).
4. Click **"Deploy"**. Your site will be live on an SSL-secured `vercel.app` domain within minutes!
