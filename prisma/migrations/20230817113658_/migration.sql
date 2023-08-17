-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "size" TEXT[],
    "color" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "img" TEXT[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
