-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "replicantId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT,
    "description" TEXT,
    "snapshot" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserCard_replicantId_fkey" FOREIGN KEY ("replicantId") REFERENCES "Replicant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserCard" ("createdAt", "description", "id", "name", "replicantId", "role", "snapshot", "updatedAt") SELECT "createdAt", "description", "id", "name", "replicantId", "role", "snapshot", "updatedAt" FROM "UserCard";
DROP TABLE "UserCard";
ALTER TABLE "new_UserCard" RENAME TO "UserCard";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
