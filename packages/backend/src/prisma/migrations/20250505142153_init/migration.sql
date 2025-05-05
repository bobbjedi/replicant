-- CreateTable
CREATE TABLE "Replicant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Interview" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "replicantId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Interview_replicantId_fkey" FOREIGN KEY ("replicantId") REFERENCES "Replicant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Snapshot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "replicantId" INTEGER NOT NULL,
    "data" BLOB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Snapshot_replicantId_fkey" FOREIGN KEY ("replicantId") REFERENCES "Replicant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "interviewId" INTEGER NOT NULL,
    "questionText" TEXT NOT NULL,
    "answerText" TEXT,
    "emotion" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Question_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "Interview" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Interview_replicantId_key" ON "Interview"("replicantId");
