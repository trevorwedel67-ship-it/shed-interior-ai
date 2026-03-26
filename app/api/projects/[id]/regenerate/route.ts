import OpenAI from "openai";
import {
  getProjectById,
  updateProjectAIPlan,
  type AIPlan,
} from "@/lib/project-file-store";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function POST(_: Request, { params }: Props) {
  try {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
      return Response.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { message: "Missing OPENAI_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    const prompt = `
You are an expert shed interior planner.

Create a concise interior design plan for this shed project.

Project:
- Shed size: ${project.config.shedSize}
- Use case: ${project.config.useCase}
- Style: ${project.config.style}
- Budget: ${project.config.budget}

Return STRICT JSON with this exact shape:
{
  "title": "string",
  "summary": "string",
  "layoutBullets": ["string", "string", "string", "string"],
  "budgetNotes": ["string", "string", "string"]
}

Rules:
- Make it practical and realistic
- Tailor it to the use case
- Match the chosen style
- Keep each bullet short
- No markdown
- No extra commentary
`;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    const text = response.output_text?.trim();

    if (!text) {
      return Response.json(
        { message: "OpenAI returned empty output" },
        { status: 500 }
      );
    }

    const parsed = JSON.parse(text) as AIPlan;

    const updated = updateProjectAIPlan(id, parsed);

    if (!updated) {
      return Response.json(
        { message: "Failed to save AI plan" },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      project: updated,
    });
  } catch (error) {
    console.error("POST /api/projects/[id]/regenerate failed:", error);

    return Response.json(
      { message: "Failed to generate AI plan" },
      { status: 500 }
    );
  }
}