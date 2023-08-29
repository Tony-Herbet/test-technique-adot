import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Destination, DestinationSchema } from './entities/destination.entity';
import { DestinationService } from './destination.service';
import { DestinationResolver } from './destination.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Destination.name,
        schema: DestinationSchema,
      },
    ]),
  ],
  providers: [DestinationService, DestinationResolver],
})
export class DestinationModule {}
