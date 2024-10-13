import { CoreModule } from '@core/core.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GetAllMotherboardsResolver } from './product/motherboard/resolvers/getAll.resolver';
import { join } from 'path'
import * as process from 'process';

@Module({
  providers: [GetAllMotherboardsResolver],
  imports: [
    CoreModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
  ],
})
export class WebModule {}
