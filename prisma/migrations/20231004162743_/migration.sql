/*
  Warnings:

  - You are about to drop the column `rating` on the `CartProduct` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Favorite` table. All the data in the column will be lost.
  - Added the required column `ratings` to the `CartProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ratings` to the `Favorite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CartProduct" DROP COLUMN "rating",
ADD COLUMN     "ratings" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "rating",
ADD COLUMN     "ratings" JSONB NOT NULL;
