import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Destination } from './entities/destination.entity';
import { IDestination } from 'src/types/destination.type';

@Injectable()
export class DestinationService {
  constructor(
    @InjectModel(Destination.name)
    private readonly destinationModel: Model<IDestination>,
  ) {}

  async findAll(): Promise<Array<IDestination>> {
    return await this.destinationModel.find().exec();
  }
}
