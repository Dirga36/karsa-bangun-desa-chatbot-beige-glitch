# Karsa Bangun Desa — Asisten Digital & Ekosistem Desa Mandiri

[![Next.js](https://img.shields.io/badge/Next.js-15.4.9-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.1-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.11-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![n8n Integration](https://img.shields.io/badge/n8n-AI_Chat_Widget-FF6D5A?logo=n8n)](https://n8n.io/)

Modern web platform and 24/7 AI-powered digital advisory assistant for **Karsa Bangun Desa**—a strategic rural empowerment institution based in Bojongsoang, Bandung Regency, West Java, Indonesia.

---

## Table of Contents

- [Overview & Capabilities](#overview--capabilities)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Environment Configuration](#environment-configuration)
- [Quick Start & Basic Usage](#quick-start--basic-usage)
- [n8n AI Chatbot Configuration](#n8n-ai-chatbot-configuration)
- [Available Scripts](#available-scripts)
- [Design Theme & Styling](#design-theme--styling)
- [Deployment](#deployment)
- [License & Credits](#license--credits)

---

## Key Features

- **Asisten Digital Chat Widget**: Native client-side embed powered by `@n8n/chat` connecting to custom n8n AI webhook orchestrators with specialized rural advisory knowledge.
- **Natural Tones Design System**: High-contrast, accessibility-first theme utilizing Forest Green (`#166534`), Earth Gold (`#D97706`), and Warm Neutral Canvas (`#FAFAF9`).
- **Direct WhatsApp Dispatch**: Instant hotline dispatch formatted for village heads, BUMDes leaders, and CSR partners with pre-filled consultation templates.
- **Modular Component Architecture**: Includes full-suite components for rapid landing page composition:
  - `HeroSection`: Focused digital assistant launchpad with interactive prompt triggers.
  - `AboutSection`: Institution profile with 5-Pillar Pentahelix framework.
  - `ServicesSection`: Comprehensive service modules, deliverables, and 4-stage roadmaps.
  - `EvidenceResearchSection`: Spatial GIS case studies (Bojong Kulur & Simpang Gaung Riau).
  - `IdmAssessmentWidget`: Interactive 6-indicator IDM readiness calculator.
  - `ContactSection`: Secretariat directory and consultation booking form.
  - `Footer`: Official institutional contacts and social links.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js 15+ (App Router)](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) |
| **Styling Engine** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss` & `tw-animate-css` |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Animations** | [Motion](https://motion.dev/) |
| **AI Integration** | [n8n Chat SDK](https://www.npmjs.com/package/@n8n/chat) / [@google/genai](https://www.npmjs.com/package/@google/genai) |

---

## Project Structure

```text
├── app/
│   ├── favicon.ico              # Institution browser favicon
│   ├── globals.css              # Global styles, Tailwind v4 tokens & glass utilities
│   ├── layout.tsx               # Root Next.js layout with font imports & metadata
│   └── page.tsx                 # Main entry page assembling active sections
├── components/
│   ├── AboutSection.tsx         # Pentahelix collaboration framework & vision
│   ├── ContactSection.tsx       # Consultation request form & secretariat directory
│   ├── EvidenceResearchSection.tsx # Empirical case studies (Bojong Kulur & Riau)
│   ├── Footer.tsx               # Institutional footer & social links
│   ├── HeroSection.tsx          # Digital Assistant hero & query interface
│   ├── IdmAssessmentWidget.tsx  # Interactive IDM readiness diagnostic calculator
│   ├── N8nChatWidget.tsx        # Dynamic n8n chat client loader & webhook bridge
│   ├── Navbar.tsx               # Sticky header navigation & mobile drawer
│   └── ServicesSection.tsx      # Master plan & cooperative consulting roadmap
├── lib/
│   └── utils.ts                 # Styling utilities (clsx & tailwind-merge)
├── hooks/
│   └── use-mobile.ts            # Responsive breakpoint hook
├── .env.example                 # Template for environment variables
├── metadata.json                # AI Studio application manifest & permissions
├── next.config.ts               # Next.js configuration
├── package.json                 # Project dependencies and script commands
├── postcss.config.mjs           # PostCSS configuration for Tailwind v4
└── tsconfig.json                # TypeScript compiler configuration
```

---

## Prerequisites

Before running the application locally, ensure you have:

- **Node.js**: `v20.x` or higher (LTS recommended)
- **npm** (v9+) or **pnpm** / **yarn**
- Modern web browser (Chrome, Edge, Firefox, Safari)

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dirga36/karsa-bangun-desa-chatbot-beige-glitch
   cd karsa-bangun-desa-chatbot-beige-glitch
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example configuration file:
   ```bash
   cp .env.example .env.local
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Configuration

Create a `.env.local` file at the root of your project:

```env
# Optional: Google Gemini AI API key (for server-side GenAI features)
GEMINI_API_KEY=[YOUR_GEMINI_API_KEY]

# Optional: n8n AI Chatbot Webhook URL
NEXT_PUBLIC_N8N_WEBHOOK_URL="https://[YOUR_N8N_HOST]/webhook/[YOUR_WEBHOOK_ID]/chat"
```

> **Security Note:** Never commit `.env.local` or secret keys into version control. Server-side keys must remain private and accessed strictly via `process.env.GEMINI_API_KEY`.

---

## Quick Start & Basic Usage

### Embedding the n8n Chatbot Widget

To integrate the digital assistant in any Next.js component:

```tsx
import React from 'react';
import N8nChatWidget from '@/components/N8nChatWidget';

export default function CustomPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="p-8">
        <h1 className="text-2xl font-bold text-stone-900">
          Konsultasi Desa Mandiri
        </h1>
        <p className="text-stone-600">
          Klik widget chat di pojok kanan bawah untuk memulai sesi tanya-jawab.
        </p>
      </section>

      {/* Mounts the dynamic n8n AI chat client */}
      <N8nChatWidget />
    </main>
  );
}
```

---

## n8n AI Chatbot Configuration

The digital assistant is managed inside `/components/N8nChatWidget.tsx`. You can customize the chat title, welcome greeting, primary brand color, and webhook target:

```typescript
// components/N8nChatWidget.tsx
createChat({
  webhookUrl: '[YOUR_N8N_WEBHOOK_URL]', // e.g. https://n8n.example.com/webhook/.../chat
  initialMessages: [
    'Sampurasun! 👋 Saya Asisten Digital Karsa Bangun Desa.',
    'Ada yang bisa saya bantu terkait Master Plan Desa Wisata/Agro atau BUMDes hari ini?',
  ],
  i18n: {
    en: {
      title: 'Asisten Karsa Bangun Desa',
      subtitle: 'Pendamping Digital Desa Mandiri',
      footer: 'Pendampingan Berbasis Bukti & Kearifan Lokal',
      getStarted: 'Mulai Percakapan',
      inputPlaceholder: 'Tulis pertanyaan Anda seputar desa...',
    },
  },
  style: {
    primaryColor: '#166534', // Brand Forest Green
  },
});
```

---

## Available Scripts

In the project root directory, you can run:

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server on `http://localhost:3000` |
| `npm run build` | Builds the production-ready optimized application in `.next/` |
| `npm run start` | Starts the production Next.js server |
| `npm run lint` | Executes ESLint to validate syntax and code standards |

---

## Design Theme & Styling

The application adheres to the **Natural Tones** visual identity:

- **Typography**: `Plus Jakarta Sans` with high legibility and geometric structure.
- **Color Palette**:
  - `Forest Green`: `#166534` (`bg-forest`, `forest-green`)
  - `Earth Gold`: `#D97706` (`bg-earth`, `earth-gold`)
  - `Warm Background`: `#FAFAF9` / `#F5F5F4`
  - `High-Contrast Text`: `#1C1917` / `#44403C`
- **Surface Elevation**: Rounded pill containers (`rounded-full`), soft ambient shadows (`shadow-soft`), and frosted glass cards (`.glass-card`).

---

## Deployment

### Deploy to Google Cloud Run / Container Environments

1. Build the production application:
   ```bash
   npm run build
   ```
2. Start the service (bound to port 3000):
   ```bash
   npm run start
   ```

### Deploy to Vercel

The repository is fully compatible with Vercel zero-configuration deployments:
1. Push your code to GitHub/GitLab.
2. Import the repository in [Vercel](https://vercel.com).
3. Set any necessary environment variables under **Project Settings > Environment Variables**.
4. Click **Deploy**.

---

## Credits

- **Institution**: **Karsa Bangun Desa** (Bojongsoang, Kabupaten Bandung, Jawa Barat, Indonesia).
- **Inquiries & Partnerships**: `karsabangundesa@gmail.com` | WhatsApp: `0857-7000-3549` / `0852-8000-3548`.
- **License**: Proprietary / Educational Open Development. All institutional frameworks and case study materials are protected by Karsa Bangun Desa.
