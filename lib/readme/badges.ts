const techBadgeMap: Record<string, { label: string; color: string; logo: string; logoColor?: string }> = {
  "next.js": { label: "Next.js", color: "000000", logo: "nextdotjs" },
  react: { label: "React", color: "20232a", logo: "react", logoColor: "61dafb" },
  typescript: { label: "TypeScript", color: "3178c6", logo: "typescript" },
  javascript: { label: "JavaScript", color: "f7df1e", logo: "javascript", logoColor: "000000" },
  "tailwind css": { label: "Tailwind CSS", color: "06b6d4", logo: "tailwindcss" },
  "node.js": { label: "Node.js", color: "339933", logo: "nodedotjs" },
  express: { label: "Express", color: "000000", logo: "express" },
  laravel: { label: "Laravel", color: "ff2d20", logo: "laravel" },
  php: { label: "PHP", color: "777bb4", logo: "php" },
  mysql: { label: "MySQL", color: "4479a1", logo: "mysql" },
  postgresql: { label: "PostgreSQL", color: "4169e1", logo: "postgresql" },
  mongodb: { label: "MongoDB", color: "47a248", logo: "mongodb" },
  python: { label: "Python", color: "3776ab", logo: "python" },
  vercel: { label: "Vercel", color: "000000", logo: "vercel" },
  "framer motion": { label: "Framer Motion", color: "0055ff", logo: "framer" },
};

function encodeBadgeText(value: string) {
  return encodeURIComponent(value.trim().replaceAll("-", "--").replaceAll(" ", "_"));
}

export function getTechList(techStack: string) {
  return techStack
    .split(",")
    .map((tech) => tech.trim())
    .filter(Boolean);
}

export function getTechBadge(tech: string) {
  const normalized = tech.trim().toLowerCase();
  const match = techBadgeMap[normalized];

  if (!match) {
    return `![${tech}](https://img.shields.io/badge/${encodeBadgeText(tech)}-555555?style=for-the-badge)`;
  }

  const logoColor = match.logoColor ? `&logoColor=${match.logoColor}` : "&logoColor=white";
  return `![${match.label}](https://img.shields.io/badge/${encodeBadgeText(match.label)}-${match.color}?style=for-the-badge&logo=${match.logo}${logoColor})`;
}

export function getLicenseBadge(license: string) {
  if (license === "None") return "";
  return `![License](https://img.shields.io/badge/license-${encodeBadgeText(license)}-8a5631?style=for-the-badge)`;
}

export function getGitHubBadge(githubUrl: string) {
  if (!githubUrl) return "";
  return `[![GitHub](https://img.shields.io/badge/GitHub-Repository-24292f?style=for-the-badge&logo=github&logoColor=white)](${githubUrl})`;
}

export function getDemoBadge(demoUrl: string) {
  if (!demoUrl) return "";
  return `[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit-8a5631?style=for-the-badge&logo=vercel&logoColor=white)](${demoUrl})`;
}
