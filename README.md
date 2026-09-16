## docker start

```bash
docker-compose up --build
```

## initial url

<http://localhost:3000/graphql>.

## request example

```graphql
query Profile {
  profile {
    description
    id
    skills {
      category
      id
      name
    }
    projects {
      description
      id
      name
      url
    }
  }
}
```

## arch

```text
GraphQL request
  └─ ProfileResolver            contract
      └─ ProfileService         logic
          └─ ProfileRepository  repository
              └─ PrismaService  SQL connector
```

## guide:

```bash
corepack enable
cp .env.example .env
docker compose up -d database
pnpm install
pnpm prisma:migrate:deploy
pnpm prisma:seed
pnpm start:dev
```
