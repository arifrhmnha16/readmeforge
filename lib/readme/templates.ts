import { getDemoBadge, getGitHubBadge, getLicenseBadge, getTechBadge, getTechList } from "./badges";
import type { ReadmeData } from "./types";

function cleanLines(lines: string[]) {
  return lines.filter((line, index, array) => {
    if (line.trim()) return true;
    return array[index - 1]?.trim() && array[index + 1]?.trim();
  });
}

function section(title: string, body: string[]) {
  const content = cleanLines(body);
  return content.length ? [`## ${title}`, "", ...content, ""] : [];
}

function badges(data: ReadmeData) {
  const output = [
    data.badges.techStack ? getTechList(data.techStack).map(getTechBadge).join(" ") : "",
    data.badges.license ? getLicenseBadge(data.license) : "",
    data.badges.github ? getGitHubBadge(data.githubUrl) : "",
    data.badges.demo ? getDemoBadge(data.demoUrl) : "",
  ].filter(Boolean);

  return output.length ? [output.join(" "), ""] : [];
}

function image(data: ReadmeData) {
  return data.screenshotUrl ? [`![${data.projectName} preview](${data.screenshotUrl})`, ""] : [];
}

function featureLines(data: ReadmeData) {
  return data.features.filter(Boolean).map((feature) => `- ${feature}`);
}

function stackLines(data: ReadmeData) {
  return getTechList(data.techStack).map((tech) => `- ${tech}`);
}

function installLines(data: ReadmeData) {
  return [
    "```bash",
    "git clone " + (data.githubUrl || "https://github.com/your-username/your-project.git"),
    `cd ${data.projectName.toLowerCase().replaceAll(" ", "-") || "your-project"}`,
    data.installCommand,
    "```",
    "",
    "Start the development server:",
    "",
    "```bash",
    data.devCommand,
    "```",
    "",
    "Create a production build:",
    "",
    "```bash",
    data.buildCommand,
    "```",
  ];
}

function envLines(data: ReadmeData) {
  const variables = data.envVariables.filter((item) => item.key.trim());
  if (!variables.length) return [];

  return [
    "Create a `.env.local` file and add:",
    "",
    "```env",
    ...variables.map((item) => `${item.key}=${item.value}`),
    "```",
  ];
}

function linksLines(data: ReadmeData) {
  return [
    data.demoUrl ? `- Live demo: [${data.demoUrl}](${data.demoUrl})` : "",
    data.githubUrl ? `- Repository: [${data.githubUrl}](${data.githubUrl})` : "",
  ].filter(Boolean);
}

function footerSections(data: ReadmeData) {
  return [
    ...section("License", [
      data.license === "None"
        ? "This project does not currently specify a license."
        : `Distributed under the ${data.license} license.`,
    ]),
    ...section("Author", [data.authorName ? `Created by ${data.authorName}.` : "Created by the project maintainer."]),
  ];
}

export function generateMinimalTemplate(data: ReadmeData) {
  return cleanLines([
    `# ${data.projectName}`,
    "",
    data.shortDescription,
    "",
    ...badges(data),
    ...image(data),
    ...section("About", [data.longDescription]),
    ...section("Features", featureLines(data)),
    ...section("Tech Stack", stackLines(data)),
    ...section("Installation", installLines(data)),
    ...section("Usage", ["Run the app locally, open the development URL, and start exploring the project workflow."]),
    ...section("Environment Variables", envLines(data)),
    ...section("Links", linksLines(data)),
    ...footerSections(data),
  ]).join("\n");
}

export function generateModernDeveloperTemplate(data: ReadmeData) {
  return cleanLines([
    `<div align="center">`,
    "",
    `# ${data.projectName}`,
    "",
    data.shortDescription,
    "",
    ...badges(data),
    `</div>`,
    "",
    ...image(data),
    ...section("What is this?", [data.longDescription]),
    ...section("Highlights", featureLines(data)),
    ...section("Built With", stackLines(data)),
    ...section("Quick Start", installLines(data)),
    ...section("Usage", [
      `Use ${data.projectName} as a focused developer tool: customize the configuration, run it locally, and ship a polished experience.`,
    ]),
    ...section("Environment Variables", envLines(data)),
    ...section("Project Links", linksLines(data)),
    ...footerSections(data),
  ]).join("\n");
}

export function generateSaasTemplate(data: ReadmeData) {
  return cleanLines([
    `# ${data.projectName}`,
    "",
    `> ${data.shortDescription}`,
    "",
    ...badges(data),
    ...image(data),
    ...section("Overview", [data.longDescription]),
    ...section("Product Capabilities", featureLines(data)),
    ...section("Technology", stackLines(data)),
    ...section("Local Setup", installLines(data)),
    ...section("Usage", [
      "Configure your environment variables, start the development server, and iterate on the product experience.",
    ]),
    ...section("Environment Variables", envLines(data)),
    ...section("Deployment", [
      "The project is ready for modern hosting platforms such as Vercel, Netlify, or any Node-compatible provider.",
    ]),
    ...section("Resources", linksLines(data)),
    ...footerSections(data),
  ]).join("\n");
}

export function generateOpenSourceTemplate(data: ReadmeData) {
  return cleanLines([
    `# ${data.projectName}`,
    "",
    data.shortDescription,
    "",
    ...badges(data),
    ...image(data),
    ...section("About", [data.longDescription]),
    ...section("Features", featureLines(data)),
    ...section("Tech Stack", stackLines(data)),
    ...section("Getting Started", installLines(data)),
    ...section("Usage", ["Fork the repository, install dependencies, and run the development server."]),
    ...section("Environment Variables", envLines(data)),
    ...section("Contributing", [
      "Contributions are welcome. Please open an issue first to discuss major changes before submitting a pull request.",
    ]),
    ...section("Links", linksLines(data)),
    ...footerSections(data),
  ]).join("\n");
}

export function generatePortfolioTemplate(data: ReadmeData) {
  return cleanLines([
    `# ${data.projectName}`,
    "",
    `A portfolio-ready project case study: ${data.shortDescription}`,
    "",
    ...badges(data),
    ...image(data),
    ...section("Project Story", [data.longDescription]),
    ...section("Key Features", featureLines(data)),
    ...section("Stack Decisions", stackLines(data)),
    ...section("Run Locally", installLines(data)),
    ...section("Usage", [
      "Explore the interface, review the implementation choices, and adapt the project for your own portfolio workflow.",
    ]),
    ...section("Environment Variables", envLines(data)),
    ...section("See It Live", linksLines(data)),
    ...footerSections(data),
  ]).join("\n");
}

export function generateDarkTemplate(data: ReadmeData) {
  return cleanLines([
    `<h1 align="center">${data.projectName}</h1>`,
    "",
    `<p align="center">${data.shortDescription}</p>`,
    "",
    ...badges(data),
    ...image(data),
    ...section("Concept", [data.longDescription]),
    ...section("Core Features", featureLines(data).map((line) => line.replace("- ", "- `")) .map((line) => `${line}\``)),
    ...section("Technical Stack", stackLines(data)),
    ...section("Install & Run", installLines(data)),
    ...section("Usage", [`Launch ${data.projectName}, tune the configuration, and shape the experience for your workflow.`]),
    ...section("Environment Variables", envLines(data)),
    ...section("Links", linksLines(data)),
    ...footerSections(data),
  ]).join("\n");
}
