"use client";

import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Select, Textarea } from "@/components/ui/input";
import { TemplateSelector } from "@/components/studio/template-selector";
import type { EnvVariable, LicenseType, PackageManager, ReadmeData, ReadmeTemplate } from "@/lib/readme/types";

type ReadmeFormProps = {
  data: ReadmeData;
  onChange: (data: ReadmeData) => void;
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-foreground">
      {label}
      {children}
    </label>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="p-5">
      <h2 className="text-base font-bold">{title}</h2>
      <div className="mt-4 grid gap-4">{children}</div>
    </Card>
  );
}

export function ReadmeForm({ data, onChange }: ReadmeFormProps) {
  const update = <K extends keyof ReadmeData>(key: K, value: ReadmeData[K]) => onChange({ ...data, [key]: value });

  const updateFeature = (index: number, value: string) => {
    update(
      "features",
      data.features.map((feature, featureIndex) => (featureIndex === index ? value : feature)),
    );
  };

  const updateEnv = (index: number, key: keyof EnvVariable, value: string) => {
    update(
      "envVariables",
      data.envVariables.map((item, itemIndex) => (itemIndex === index ? { ...item, [key]: value } : item)),
    );
  };

  return (
    <div className="grid gap-5">
      <Section title="Project Info">
        <Field label="Project name">
          <Input value={data.projectName} onChange={(event) => update("projectName", event.target.value)} />
        </Field>
        <Field label="Short description">
          <Input value={data.shortDescription} onChange={(event) => update("shortDescription", event.target.value)} />
        </Field>
        <Field label="Long description">
          <Textarea value={data.longDescription} onChange={(event) => update("longDescription", event.target.value)} />
        </Field>
        <Field label="GitHub URL">
          <Input value={data.githubUrl} onChange={(event) => update("githubUrl", event.target.value)} />
        </Field>
        <Field label="Demo URL">
          <Input value={data.demoUrl} onChange={(event) => update("demoUrl", event.target.value)} />
        </Field>
        <Field label="Screenshot URL">
          <Input value={data.screenshotUrl} onChange={(event) => update("screenshotUrl", event.target.value)} />
        </Field>
      </Section>

      <Section title="Tech Stack">
        <Field label="Comma-separated technologies">
          <Textarea value={data.techStack} onChange={(event) => update("techStack", event.target.value)} />
        </Field>
      </Section>

      <Section title="Features">
        {data.features.map((feature, index) => (
          <div key={index} className="flex gap-2">
            <Input value={feature} onChange={(event) => updateFeature(index, event.target.value)} />
            <Button
              aria-label="Remove feature"
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => update("features", data.features.filter((_, featureIndex) => featureIndex !== index))}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button type="button" variant="secondary" onClick={() => update("features", [...data.features, ""])}>
          <Plus className="h-4 w-4" />
          Add feature
        </Button>
      </Section>

      <Section title="Installation">
        <Field label="Package manager">
          <Select value={data.packageManager} onChange={(event) => update("packageManager", event.target.value as PackageManager)}>
            {["npm", "yarn", "pnpm", "bun"].map((manager) => (
              <option key={manager}>{manager}</option>
            ))}
          </Select>
        </Field>
        <Field label="Install command">
          <Input value={data.installCommand} onChange={(event) => update("installCommand", event.target.value)} />
        </Field>
        <Field label="Development command">
          <Input value={data.devCommand} onChange={(event) => update("devCommand", event.target.value)} />
        </Field>
        <Field label="Build command">
          <Input value={data.buildCommand} onChange={(event) => update("buildCommand", event.target.value)} />
        </Field>
      </Section>

      <Section title="Environment Variables">
        {data.envVariables.map((item, index) => (
          <div key={index} className="grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
            <Input placeholder="KEY" value={item.key} onChange={(event) => updateEnv(index, "key", event.target.value)} />
            <Input placeholder="value" value={item.value} onChange={(event) => updateEnv(index, "value", event.target.value)} />
            <Button
              aria-label="Remove environment variable"
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => update("envVariables", data.envVariables.filter((_, itemIndex) => itemIndex !== index))}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="secondary"
          onClick={() => update("envVariables", [...data.envVariables, { key: "", value: "" }])}
        >
          <Plus className="h-4 w-4" />
          Add env variable
        </Button>
      </Section>

      <Section title="Project Metadata">
        <Field label="Author name">
          <Input value={data.authorName} onChange={(event) => update("authorName", event.target.value)} />
        </Field>
        <Field label="License">
          <Select value={data.license} onChange={(event) => update("license", event.target.value as LicenseType)}>
            {["MIT", "Apache-2.0", "GPL-3.0", "ISC", "None"].map((license) => (
              <option key={license}>{license}</option>
            ))}
          </Select>
        </Field>
      </Section>

      <Section title="Template">
        <TemplateSelector value={data.template} onChange={(value: ReadmeTemplate) => update("template", value)} />
      </Section>

      <Section title="Badge Options">
        {[
          ["techStack", "Tech stack badges"],
          ["license", "License badge"],
          ["github", "GitHub badge"],
          ["demo", "Demo button"],
        ].map(([key, label]) => (
          <label key={key} className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-3 text-sm font-semibold">
            {label}
            <input
              className="h-5 w-5 accent-[#c58a55]"
              type="checkbox"
              checked={data.badges[key as keyof typeof data.badges]}
              onChange={(event) => update("badges", { ...data.badges, [key]: event.target.checked })}
            />
          </label>
        ))}
      </Section>
    </div>
  );
}
