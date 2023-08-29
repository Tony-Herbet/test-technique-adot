import { Query, Resolver } from '@nestjs/graphql';
import { DestinationService } from './destination.service';
import { IDestination } from 'src/types/destination.type';

@Resolver('Destination')
export class DestinationResolver {
  constructor(private readonly destinationService: DestinationService) {}

  @Query('destinations')
  findAll(): Promise<Array<IDestination>> {
    return this.destinationService.findAll();
  }
}
