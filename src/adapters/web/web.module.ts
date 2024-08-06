import { CoreModule } from '@core/core.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GetAllMotherboardsResolver } from './product/motherboard/resolvers/getAll.resolver';

@Module({
  providers: [GetAllMotherboardsResolver],
  imports: [
    CoreModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
})
export class WebModule {}
