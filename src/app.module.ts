import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PrismaModule } from './database/prisma.module.js';
import { ProfileModule } from './profile/profile.module.js';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      graphiql: false,
      introspection: true,
      csrfPrevention: process.env.NODE_ENV !== 'production',
      plugins: [ApolloServerPluginLandingPageLocalDefault({ footer: false })],
    }),
    PrismaModule,
    ProfileModule,
  ],
})
export class AppModule {}
