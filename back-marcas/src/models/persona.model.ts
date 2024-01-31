import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Persona extends Document {
  @Prop()
  nombre: string;

  @Prop()
  apellido: string;

  @Prop()
  paisResidencia: string;
}

export type PersonaDocument = Persona & Document;
export const PersonaSchema = SchemaFactory.createForClass(Persona);

