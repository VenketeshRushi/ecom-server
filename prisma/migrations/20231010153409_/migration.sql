/*
  Warnings:

  - You are about to drop the `location` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "location";

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "long" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);
