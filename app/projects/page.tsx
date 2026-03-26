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
  createdAt: string;
};

function getProjectSummary(useCase: string) {
  switch (useCase) {
    case "Workshop":
      return "Functional work zones, tool storage, and open floor space.";
    case "Gym":
      return "Compact training layout with open movement space.";
    case "Storage":
      return "Maximized shelving, organization, and easy access flow.";
    case "Office":
    default:
      return "Focused workspace with comfort, storage, and clean layout.";
  }
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function loadProjects() {
    try {
      const res = await fetch("/api/projects", { cache: "no-store" });
      const data = await res.json();
      setProjects(Array.isArray(data) ? data.slice().reverse() : []);
    } catch (error) {
      console.error("Failed to load projects:", error);
      setProjects([]);
    }
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function handleDelete(projectId: string) {
    const confirmed = window.confirm("Delete this project?");
    if (!confirmed) return;

    setLoadingId(projectId);

    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        console.error("Delete failed response:", body);
        throw new Error("Delete failed");
      }

      setProjects((prev) => prev.filter((p) => p.projectId !== projectId));
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete project.");
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">Project Library</p>
            <h1 className="mt-1 text-3xl font-bold">Your Shed Projects</h1>
            <p className="mt-2 text-gray-600">
              Reopen, review, and continue any saved shed design.
            </p>
          </div>

          <a
            href="/builder"
            className="rounded-xl bg-black px-5 py-3 text-sm text-white hover:opacity-90"
          >
            New Project
          </a>
        </div>

        {projects.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
            <h2 className="text-xl font-semibold">No projects yet</h2>
            <p className="mt-2 text-gray-600">
              Start your first shed interior design to see it here.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.projectId}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <a href={`/results/${project.projectId}`} className="block">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        {project.config.style} {project.config.useCase}
                      </p>
                      <h2 className="mt-1 text-xl font-semibold">
                        {project.config.shedSize} {project.config.useCase} Design
                      </h2>
                    </div>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                      {project.config.budget}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-gray-600">
                    {getProjectSummary(project.config.useCase)}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 text-xs text-gray-500">
                    <span className="rounded-full bg-gray-100 px-3 py-1">
                      Size: {project.config.shedSize}
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1">
                      Style: {project.config.style}
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1">
                      Use: {project.config.useCase}
                    </span>
                  </div>

                  <p className="mt-6 text-xs text-gray-400">
                    Created {new Date(project.createdAt).toLocaleString()}
                  </p>
                </a>

                <button
                  type="button"
                  onClick={() => handleDelete(project.projectId)}
                  disabled={loadingId === project.projectId}
                  className="mt-4 rounded-lg border border-red-300 px-4 py-2 text-sm text-red-600 hover:bg-red-50 disabled:opacity-60"
                >
                  {loadingId === project.projectId ? "Deleting..." : "Delete Project"}
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}