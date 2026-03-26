"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function BuilderPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [shedSize, setShedSize] = useState("10x16");
  const [useCase, setUseCase] = useState("Office");
  const [style, setStyle] = useState("Modern");
  const [budget, setBudget] = useState("Basic");

  const [isLoading, setIsLoading] = useState(false);
  const [isPrefilling, setIsPrefilling] = useState(true);

  useEffect(() => {
    async function loadProjectForEditing() {
      const projectId = searchParams.get("projectId");

      if (!projectId) {
        setIsPrefilling(false);
        return;
      }

      try {
        const response = await fetch(`/api/projects/${projectId}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load project");
        }

        const project = await response.json();

        setShedSize(project.config.shedSize || "10x16");
        setUseCase(project.config.useCase || "Office");
        setStyle(project.config.style || "Modern");
        setBudget(project.config.budget || "Basic");
      } catch (error) {
        console.error("Failed to prefill project:", error);
        alert("Could not load project for editing.");
      } finally {
        setIsPrefilling(false);
      }
    }

    loadProjectForEditing();
  }, [searchParams]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shedSize,
          useCase,
          style,
          budget,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      router.push(`/results/${data.projectId}`);
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Something went wrong. Try again.");
      setIsLoading(false);
    }
  }

  const isDisabled = isLoading || isPrefilling;
  const isEditing = Boolean(searchParams.get("projectId"));

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <a
          href="/projects"
          className="text-sm text-gray-600 underline hover:text-black"
        >
          View past projects →
        </a>

        <h1 className="mt-4 text-3xl font-bold">
          {isEditing ? "Edit Your Shed Design" : "Build Your Shed Design"}
        </h1>

        <p className="mt-2 text-gray-600">
          {isEditing
            ? "Update your saved shed setup, style, and budget."
            : "Choose your shed setup, style, and budget."}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-2xl bg-white p-6 shadow-sm"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">Shed Size</label>
            <select
              value={shedSize}
              onChange={(e) => setShedSize(e.target.value)}
              disabled={isDisabled}
              className="w-full rounded-lg border px-4 py-3 disabled:opacity-60"
            >
              <option>10x16</option>
              <option>10x12</option>
              <option>12x16</option>
              <option>12x20</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Use Case</label>
            <select
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              disabled={isDisabled}
              className="w-full rounded-lg border px-4 py-3 disabled:opacity-60"
            >
              <option>Office</option>
              <option>Workshop</option>
              <option>Gym</option>
              <option>Storage</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Style</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              disabled={isDisabled}
              className="w-full rounded-lg border px-4 py-3 disabled:opacity-60"
            >
              <option>Modern</option>
              <option>Rustic</option>
              <option>Industrial</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Budget</label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              disabled={isDisabled}
              className="w-full rounded-lg border px-4 py-3 disabled:opacity-60"
            >
              <option>Basic</option>
              <option>Mid</option>
              <option>Premium</option>
            </select>
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              disabled={isDisabled}
              className="inline-flex min-w-[180px] items-center justify-center rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPrefilling
                ? "Loading Project..."
                : isLoading
                ? "Generating..."
                : isEditing
                ? "Save as New Version"
                : "Generate Demo Result"}
            </button>

            {isEditing && !isPrefilling ? (
              <p className="text-sm text-gray-500">
                Editing a saved project. Submitting creates a fresh updated
                version.
              </p>
            ) : null}
          </div>
        </form>
      </section>
    </main>
  );
}