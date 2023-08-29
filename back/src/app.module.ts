import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { DestinationModule } from './city/destination.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    MongooseModule.forRoot('mongodb://root:root@localhost:27017'),
    DestinationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
