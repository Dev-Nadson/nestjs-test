-- CreateTable
CREATE TABLE "LogsAudit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pathname" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "status_code" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
