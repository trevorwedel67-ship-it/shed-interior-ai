-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('draft', 'generating', 'completed', 'archived');

-- CreateTable
CREATE TABLE "projects" (
    "id" UUID NOT NULL,
    "status" "ProjectStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_configs" (
    "id" UUID NOT NULL,
    "projectId" UUID NOT NULL,
    "shedSize" TEXT NOT NULL,
    "useCase" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_configs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "project_configs_projectId_idx" ON "project_configs"("projectId");

-- AddForeignKey
ALTER TABLE "project_configs" ADD CONSTRAINT "project_configs_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
