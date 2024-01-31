import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaController } from '../controllers/persona.controller';
import { PersonaService } from '../services/persona.service';
import { Persona, PersonaSchema } from '../models/persona.model'; // Asegúrate de importar tu modelo

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Persona.name, schema: PersonaSchema }]),
  ],
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonasModule {}
