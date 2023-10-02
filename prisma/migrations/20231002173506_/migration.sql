/*
  Warnings:

  - You are about to drop the `Rating` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ratings` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "ratings" JSONB NOT NULL;

-- DropTable
DROP TABLE "Rating";
