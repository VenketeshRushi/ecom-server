/*
  Warnings:

  - You are about to drop the column `orderId` on the `CartProduct` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CartProduct" DROP CONSTRAINT "CartProduct_orderId_fkey";

-- AlterTable
ALTER TABLE "CartProduct" DROP COLUMN "orderId";

-- CreateTable
CREATE TABLE "OrderedProduct" (
    "OrderedProductId" SERIAL NOT NULL,
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "size" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "ratings" JSONB NOT NULL,
    "img" TEXT[],
    "quantity" INTEGER NOT NULL,
    "orderId" INTEGER,

    CONSTRAINT "OrderedProduct_pkey" PRIMARY KEY ("OrderedProductId")
);

-- AddForeignKey
ALTER TABLE "OrderedProduct" ADD CONSTRAINT "OrderedProduct_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
