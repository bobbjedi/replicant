-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InterviewTopic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "interviewId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "InterviewTopic_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "Interview" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_InterviewTopic" ("createdAt", "id", "interviewId", "name", "summary") SELECT "createdAt", "id", "interviewId", "name", "summary" FROM "InterviewTopic";
DROP TABLE "InterviewTopic";
ALTER TABLE "new_InterviewTopic" RENAME TO "InterviewTopic";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
