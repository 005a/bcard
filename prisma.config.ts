import 'dotenv/config';
import { defineConfig } from 'prisma/config';

const localDatabaseUrl =
  'postgresql://myuser:mypassword@localhost:5432/mycv?schema=public';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: './node_modules/.bin/tsx prisma/run-seed.ts',
  },
  datasource: {
    url: process.env.DATABASE_URL ?? localDatabaseUrl,
  },
});
