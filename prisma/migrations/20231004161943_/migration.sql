/*
  Warnings:

  - Changed the type of `rating` on the `CartProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `rating` on the `Favorite` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CartProduct" DROP COLUMN "rating",
ADD COLUMN     "rating" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "rating",
ADD COLUMN     "rating" JSONB NOT NULL;
