-- DropIndex
DROP INDEX "Favorite_userId_key";

-- AlterTable
ALTER TABLE "Favorite" ADD COLUMN     "favoriteId" SERIAL NOT NULL,
ADD CONSTRAINT "Favorite_pkey" PRIMARY KEY ("favoriteId");
