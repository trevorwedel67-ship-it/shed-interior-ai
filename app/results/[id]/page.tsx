"use client";

import { useEffect, useState } from "react";

type Project = {
  projectId: string;
  status: string;
  config: {
    shedSize: string;
    useCase: string;
    style: string;
    budget: string;
  };
  aiPlan?: {
    title: string;
    summary: string;
    layoutBullets: string[];
    budgetNotes: string[];
  } | null;
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

function getFallbackDescription(useCase: string) {
  switch (useCase) {
    case "Workshop":
      return "A functional workshop layout focused on efficiency, tool access, and open working space.";
    case "Gym":
      return "A compact gym setup optimized for movement, durability, and equipment placement.";
    case "Storage":
      return "A storage-focused layout designed for maximum organization and accessibility.";
    case "Office":
    default:
      return "A focused office setup designed for productivity, comfort, and clean aesthetics.";
  }
}

export default function ResultsPage({ params }: Props) {
  const [projectId, setProjectId] = useState("");
  const [project, setProject] = useState<Project | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const resolvedParams = await params;
        const id = resolvedParams.id;

        setProjectId(id);

        const response = await fetch(`/api/projects/${id}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          setProject(null);
          setIsLoading(false);
          return;
        }

        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error("Failed to load project:", error);
        setProject(null);
      } finally {
        setIsLoading(false);
      }
    }

    loadProject();
  }, [params]);

  async function handleRegenerate() {
    if (!projectId) return;

    setIsGenerating(true);

    try {
      const response = await fetch(`/api/projects/${projectId}/regenerate`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to regenerate AI plan");
      }

      const data = await response.json();
      setProject(data.project);
    } catch (error) {
      console.error("Regenerate failed:", error);
      alert("Failed to generate AI plan.");
    } finally {
      setIsGenerating(false);
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 text-black">
        <section className="mx-auto max-w-4xl px-6 py-16">
          <p>Loading project...</p>
        </section>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-gray-50 text-black">
        <section className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <p className="mt-3 text-gray-600">
            We couldn&apos;t find that saved shed design.
          </p>

          <a
            href="/projects"
            className="mt-6 inline-block rounded-lg bg-black px-4 py-2 text-white"
          >
            Back to Projects
          </a>
        </section>
      </main>
    );
  }

  const { shedSize, useCase, style, budget } = project.config;
  const title = project.aiPlan?.title || `${shedSize} ${useCase} Design`;
  const summary = project.aiPlan?.summary || getFallbackDescription(useCase);

  const layoutBullets = project.aiPlan?.layoutBullets || [
    `Primary zone optimized for ${useCase.toLowerCase()}`,
    `Efficient flow within ${shedSize} footprint`,
    `${style} design elements throughout`,
    `Layout aligned with ${budget.toLowerCase()} budget`,
  ];

  const budgetNotes = project.aiPlan?.budgetNotes || [
    "Start with core layout priorities first",
    "Reserve part of budget for lighting and finishing",
    "Choose durable materials in high-use areas",
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm text-gray-500">Project ID: {project.projectId}</p>

        <h1 className="mt-2 text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-gray-600">{summary}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-gray-200 px-3 py-1">
            Size: {shedSize}
          </span>
          <span className="rounded-full bg-gray-200 px-3 py-1">
            Use: {useCase}
          </span>
          <span className="rounded-full bg-gray-200 px-3 py-1">
            Style: {style}
          </span>
          <span className="rounded-full bg-gray-200 px-3 py-1">
            Budget: {budget}
          </span>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={handleRegenerate}
            disabled={isGenerating}
            className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-60"
          >
            {isGenerating ? "Generating..." : "Generate / Regenerate AI Plan"}
          </button>

          <a
            href={`/builder?projectId=${project.projectId}`}
            className="rounded-lg border border-black px-4 py-2"
          >
            Edit Project
          </a>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">AI Layout Plan</h2>

          <ul className="mt-4 space-y-3 text-gray-700">
            {layoutBullets.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">AI Budget Notes</h2>

          <ul className="mt-4 space-y-3 text-gray-700">
            {budgetNotes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}