/*
  Warnings:

  - You are about to drop the `LogsAudit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "LogsAudit";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "logs_audit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pathname" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "status_code" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "started_at" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
