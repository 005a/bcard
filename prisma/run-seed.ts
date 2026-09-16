import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';
import { profileSeed, seed } from './seed.js';

const localDatabaseUrl =
  'postgresql://myuser:mypassword@localhost:5432/mycv?schema=public';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL ?? localDatabaseUrl,
});
const prisma = new PrismaClient({ adapter });

try {
  await seed(prisma);
  console.info(`Seeded profile "${profileSeed.slug}".`);
} finally {
  await prisma.$disconnect();
}
