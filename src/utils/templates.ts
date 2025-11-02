import { Template } from "../types";

export const templates: Template[] = [
  {
    id: "bun-nextjs-mantine",
    name: "KenStack Bun Next.js Mantine",
    description: "Next.js 16 + Bun + Mantine + TanStack Query + Jotai",
    repository:
      "https://github.com/KennethAduan/kenstack-bun-nextjs-mantine.git",
    packageManager: "bun",
  },
  {
    id: "vite-shadcn",
    name: "KenStack Vite ShadCN",
    description:
      "Vite + React + ShadCN + Tailwind CSS + TanStack Query + Jotai + TanStack Router",
    repository: "https://github.com/KennethAduan/kenStack-shadcn-vite.git",
    packageManager: "bun",
  },
];

export function getTemplateById(id: string): Template | undefined {
  return templates.find((template) => template.id === id);
}

export function getTemplateChoices() {
  return templates.map((template) => ({
    name: `${template.name} - ${template.description}`,
    value: template.id,
  }));
}
