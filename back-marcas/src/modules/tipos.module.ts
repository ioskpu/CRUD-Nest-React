import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TiposController } from '../controllers/tipos.controller';
import { TiposService } from '../services/tipo.service';
import { Tipos, TipoSchema } from '../models/tipos.model'; // Asegúrate de importar tu modelo

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tipos.name, schema: TipoSchema }]),
  ],
  controllers: [TiposController],
  providers: [TiposService],
})
export class TiposModule {}