import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MarcasController } from '../controllers/marcas.controller';
import { MarcasService } from '../services/marcas.service';
import { Marcas, MarcasSchema } from 'src/models/marca.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Marcas.name, schema: MarcasSchema }]),
  ],
  controllers: [MarcasController],
  providers: [MarcasService],
})
export class MarcasModule {}