import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();
  try {
    const posts = await prisma.post.findMany();
  } finally {
    prisma.$disconnect();
  }
}

main();

// running this will cause an error 
// to be solved on the next commit 