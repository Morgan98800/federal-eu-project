# Federal EU Project Structure & Functioning

This document provides a comprehensive overview of the **Federal EU Project**, a modern web application built with React and Vite, showcasing information about the European Union with a premium, "Deep Matte Tech" aesthetic.

---

## 🏗️ Project Structure

The project follows a standard modern React application structure powered by Vite.

```text
federal-eu-project/
├── public/                 # Static assets (favicons, etc.)
├── src/                    # Source code
│   ├── assets/             # Images and local font files
│   ├── App.jsx             # Main application component & logic
│   ├── App.css             # Component-specific styles & animations
│   ├── index.css           # Global styles and design tokens
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

---

## ⚙️ Core Functioning

### 1. Technology Stack
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: Vanilla CSS with Modern Features (Flexbox, Grid, Glassmorphism)
- **Linting**: ESLint with React-specific plugins

### 2. State Management
The application uses React's built-in `useState` and `useEffect` hooks to manage:
- **`activeSection`**: Tracks the current section for navigation highlighting.
- **`selectedCountry`**: Synchronizes selection between the interactive map and the member list.
- **`hoveredCountry`**: Manages temporary hover states for the map tooltips.
- **`scrollProgress`**: Calculates the percentage of the page scrolled for the top progress bar.

### 3. Key Components & Features

#### 🛡️ Navigation & Global UI
- **Scroll Progress**: A dynamic bar at the top of the viewport indicating scroll depth.
- **Sticky Navbar**: Provides quick access to Home, About, Members, Values, and Map sections.

#### 🗺️ Interactive EU Map (SVG)
- A custom SVG implementation that maps member states to coordinate points.
- **Interactivity**: Users can hover over points to see country names and click to highlight them globally.
- **Visual Feedback**: Smoothing transitions and scaling effects on interactive elements.

#### 📊 Dynamic Content
- **Statistics Grid**: Displays key EU data points (GDP, Population, etc.) using high-fidelity "glassmorphism" cards.
- **Member States Grid**: An interactive list of all 27 member states, synced with the map selection.

#### ✨ Animations & UX
- **Scroll Animations**: Uses the `IntersectionObserver` API to trigger "fade-in-up" animations as sections enter the viewport.
- **Floating Elements**: CSS-based ambient animations for thematic icons (🇪🇺, ⭐) to give the page a sense of depth and movement.

---

## 🎨 Design System

The application utilizes a premium **Deep Matte Tech** aesthetic defined in `index.css`:
- **Color Palette**: Dark, sophisticated backgrounds with vibrant primary accents.
- **Typography**: Modern, sans-serif fonts (likely Inter or similar) optimized for readability.
- **Effects**: Subtle gradients, backdrop blurs (glass-cards), and micro-animations for interactive elements.

---

## 🚀 Development

### Available Scripts
- `npm run dev`: Starts the local development server.
- `npm run build`: Compiles the project for production.
- `npm run lint`: Runs ESLint to check for code quality.
- `npm run preview`: Previews the production build locally.
