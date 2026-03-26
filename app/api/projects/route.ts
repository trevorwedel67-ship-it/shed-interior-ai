import { createProject, getAllProjects } from "@/lib/project-file-store";

export async function GET() {
  try {
    const projects = getAllProjects();
    return Response.json(projects);
  } catch (error) {
    console.error("GET /api/projects failed:", error);

    return Response.json(
      { message: "Failed to load projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const project = createProject({
      shedSize: body.shedSize || "10x16",
      useCase: body.useCase || "Office",
      style: body.style || "Modern",
      budget: body.budget || "Basic",
    });

    return Response.json({
      projectId: project.projectId,
      status: project.status,
      config: project.config,
      message: "Project created successfully",
    });
  } catch (error) {
    console.error("POST /api/projects failed:", error);

    return Response.json(
      { message: "Failed to create project" },
      { status: 500 }
    );
  }
}