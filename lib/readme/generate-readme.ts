import {
  generateDarkTemplate,
  generateMinimalTemplate,
  generateModernDeveloperTemplate,
  generateOpenSourceTemplate,
  generatePortfolioTemplate,
  generateSaasTemplate,
} from "./templates";
import type { ReadmeData } from "./types";

export function generateReadme(data: ReadmeData) {
  switch (data.template) {
    case "Minimal Clean":
      return generateMinimalTemplate(data);
    case "SaaS Product":
      return generateSaasTemplate(data);
    case "Open Source":
      return generateOpenSourceTemplate(data);
    case "Portfolio Project":
      return generatePortfolioTemplate(data);
    case "Dark Aesthetic":
      return generateDarkTemplate(data);
    case "Modern Developer":
    default:
      return generateModernDeveloperTemplate(data);
  }
}
