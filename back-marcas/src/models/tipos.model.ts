import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tipos extends Document {
  @Prop()
  tipo: string;

  @Prop()
  descripcion: string;

}

export type TiposDocument = Tipos & Document;
export const TipoSchema = SchemaFactory.createForClass(Tipos);
