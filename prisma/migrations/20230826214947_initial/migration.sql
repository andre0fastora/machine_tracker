-- CreateTable
CREATE TABLE "Machines" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "lastServiced" TIMESTAMP(3) NOT NULL,
    "binCount" INTEGER NOT NULL,
    "candy" TEXT NOT NULL,
    "moneyGatheredLastService" DOUBLE PRECISION NOT NULL,
    "moneyGatheredTotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Machines_pkey" PRIMARY KEY ("id")
);
