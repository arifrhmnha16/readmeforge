# ReadmeForge

ReadmeForge is a premium README generator for developers. It helps users create clean, professional, and portfolio-ready README files with live markdown preview, multiple templates, badge generation, autosave, copy-to-clipboard, and one-click `README.md` download.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Live Demo

[Open ReadmeForge](https://readmeforge-one.vercel.app)

## Features

- Live GitHub-style markdown preview
- Raw markdown output mode
- Six README template styles
- Tech stack badge generator
- License, GitHub, and demo badges
- Dynamic feature list
- Dynamic environment variable list
- Local autosave with `localStorage`
- Copy generated markdown to clipboard
- Download generated output as `README.md`
- No authentication, database, or paid API

## Templates

ReadmeForge includes separate markdown generator functions for:

- Minimal Clean
- Modern Developer
- SaaS Product
- Open Source
- Portfolio Project
- Dark Aesthetic

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- shadcn/ui-style components

## Getting Started

Clone the repository:

```bash
git clone https://github.com/arifrhmnha16/readmeforge.git
cd readmeforge
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  studio/page.tsx
components/
  landing/
  studio/
  ui/
lib/
  readme/
    badges.ts
    defaults.ts
    generate-readme.ts
    templates.ts
    types.ts
```

## How It Works

Users fill in project details in the studio form, choose a README template, toggle badge options, and preview the generated README live. The app generates markdown entirely in the browser, saves form state locally, and lets users copy or download the final file.

## Repository

[GitHub Repository](https://github.com/arifrhmnha16/readmeforge)

## Author

Created by Arif Rahman Hakim.

## License

This project is open source and available under the MIT License.
