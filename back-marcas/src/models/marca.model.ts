import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Marcas extends Document {
  @Prop()
  marca: string;

  @Prop()
  descripcion: string;

}

export type MarcasDocument = Marcas & Document;
export const MarcasSchema = SchemaFactory.createForClass(Marcas);
