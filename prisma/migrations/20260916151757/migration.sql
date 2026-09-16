-- CreateTable
CREATE TABLE "profiles" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professional_links" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "profile_id" INTEGER NOT NULL,

    CONSTRAINT "professional_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "profile_id" INTEGER NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE,
    "achievements" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "profile_id" INTEGER NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "profile_id" INTEGER NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_slug_key" ON "profiles"("slug");

-- CreateIndex
CREATE INDEX "professional_links_profile_id_idx" ON "professional_links"("profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "professional_links_profile_id_key_key" ON "professional_links"("profile_id", "key");

-- CreateIndex
CREATE INDEX "skills_profile_id_idx" ON "skills"("profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "skills_profile_id_name_key" ON "skills"("profile_id", "name");

-- CreateIndex
CREATE INDEX "experience_profile_id_idx" ON "experience"("profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "experience_profile_id_key_key" ON "experience"("profile_id", "key");

-- CreateIndex
CREATE INDEX "projects_profile_id_idx" ON "projects"("profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "projects_profile_id_key_key" ON "projects"("profile_id", "key");

-- AddForeignKey
ALTER TABLE "professional_links" ADD CONSTRAINT "professional_links_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
