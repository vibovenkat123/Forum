-- CreateTable
CREATE TABLE "Comment" (
    "author" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "body" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);
