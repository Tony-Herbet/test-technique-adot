import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaEntity } from 'src/types';

@Schema()
@ObjectType()
export class Destination {
  @Field()
  _id: string;
  @Prop()
  @Field()
  name: string;
}

export const DestinationSchema: SchemaEntity<Destination> =
  SchemaFactory.createForClass(Destination);
