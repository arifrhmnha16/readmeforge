export type ReadmeTemplate =
  | "Minimal Clean"
  | "Modern Developer"
  | "SaaS Product"
  | "Open Source"
  | "Portfolio Project"
  | "Dark Aesthetic";

export type PackageManager = "npm" | "yarn" | "pnpm" | "bun";
export type LicenseType = "MIT" | "Apache-2.0" | "GPL-3.0" | "ISC" | "None";

export type EnvVariable = {
  key: string;
  value: string;
};

export type BadgeOptions = {
  techStack: boolean;
  license: boolean;
  github: boolean;
  demo: boolean;
};

export type ReadmeData = {
  projectName: string;
  shortDescription: string;
  longDescription: string;
  githubUrl: string;
  demoUrl: string;
  screenshotUrl: string;
  techStack: string;
  features: string[];
  packageManager: PackageManager;
  installCommand: string;
  devCommand: string;
  buildCommand: string;
  envVariables: EnvVariable[];
  authorName: string;
  license: LicenseType;
  template: ReadmeTemplate;
  badges: BadgeOptions;
};
