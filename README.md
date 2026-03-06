# 🚀 Interactive B2B ROI Calculator

A premium, highly interactive B2B ROI Calculator designed for revenue leaders. This application features real-time funnel simulations, sleek neon Glassmorphism aesthetics, and a responsive, single-screen experience.

![ROI Calculator Screenshot](public/icon.png)

## ✨ Features

- **Interactive Funnel Simulation**: Adjust monthly traffic, conversion rates, and ACV using smooth, custom-designed sliders.
- **Real-Time Visual Feedback**: Watch your revenue opportunity update instantly with animated gauges and funnel diagrams.
- **Premium UI/UX**:
  - **Single-Screen Layout**: Designed to fit perfectly within the viewport (`100dvh`) without scrollbars.
  - **Glassmorphism**: Sleek, transparent card effects with refined borders.
  - **Neon Aesthetics**: Purple and cyan accents with subtle glow effects for a modern look.
  - **Fluid Typography**: Responsive scaling using CSS `clamp()` functions.
- **PDF Report Generation**: Export your growth forecast instantly as a clean, professionally formatted PDF.
- **Fully Responsive**: Flawless experience across mobile, tablet, and 4K desktop displays.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router & Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **PDF Export**: [html2pdf.js](https://github.com/eKoopmans/html2pdf.js)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```
src/
├── app/                # Next.js App Router (Layout, Page, Globals)
├── components/         
│   ├── calculator/     # Main ROI Logic & Step Components
│   └── ui/             # Reusable UI Elements (Sliders, Progress Bars)
├── lib/                # Utility functions (cn, formatters)
└── public/             # Static assets (Favicons, Icons, Manifest)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/roi-calculator.git
   cd roi-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```


