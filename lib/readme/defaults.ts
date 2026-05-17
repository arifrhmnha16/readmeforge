import type { ReadmeData, ReadmeTemplate } from "./types";

export const readmeTemplates: ReadmeTemplate[] = [
  "Minimal Clean",
  "Modern Developer",
  "SaaS Product",
  "Open Source",
  "Portfolio Project",
  "Dark Aesthetic",
];

export const defaultReadmeData: ReadmeData = {
  projectName: "Shotfolio",
  shortDescription: "Premium portfolio cover generator for developers.",
  longDescription:
    "Shotfolio helps developers turn website screenshots into clean, professional portfolio covers with customizable templates, live preview, device mockups, and high-quality PNG export.",
  techStack: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion",
  features: [
    "Screenshot upload",
    "Live preview",
    "Premium cover templates",
    "Auto color styling",
    "PNG export",
  ],
  githubUrl: "https://github.com/arifrhmnha16/shotfolio",
  demoUrl: "https://shotfolio.vercel.app",
  screenshotUrl: "",
  packageManager: "npm",
  installCommand: "npm install",
  devCommand: "npm run dev",
  buildCommand: "npm run build",
  envVariables: [
    {
      key: "NEXT_PUBLIC_APP_URL",
      value: "https://shotfolio.vercel.app",
    },
  ],
  authorName: "Arif Rahman Hakim",
  license: "MIT",
  template: "Modern Developer",
  badges: {
    techStack: true,
    license: true,
    github: true,
    demo: true,
  },
};
