import { deleteProjectById, getProjectById } from "@/lib/project-file-store";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_: Request, { params }: Props) {
  try {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
      return Response.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return Response.json(project);
  } catch (error) {
    console.error("GET /api/projects/[id] failed:", error);

    return Response.json(
      { message: "Failed to load project" },
      { status: 500 }
    );
  }
}

export async function DELETE(_: Request, { params }: Props) {
  try {
    const { id } = await params;
    const deleted = deleteProjectById(id);

    if (!deleted) {
      return Response.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/projects/[id] failed:", error);

    return Response.json(
      { message: "Failed to delete project" },
      { status: 500 }
    );
  }
}