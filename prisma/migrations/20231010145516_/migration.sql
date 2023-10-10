-- CreateTable
CREATE TABLE "location" (
    "id" SERIAL NOT NULL,
    "lat" TEXT NOT NULL,
    "long" TEXT NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);
