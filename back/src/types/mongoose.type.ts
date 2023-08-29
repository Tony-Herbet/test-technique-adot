import { Model, Schema } from 'mongoose';

export type SchemaEntity<Entity> = Schema<Entity, Model<Entity>>;
