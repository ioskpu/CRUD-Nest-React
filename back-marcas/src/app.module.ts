import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonasModule } from './modules/personas.module';
import { MarcasModule } from './modules/marcas.module';
import { TiposModule } from './modules/tipos.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        //atlas uri: 'mongodb+srv://lrcorales:08VQsvPkxK8Pbyyy@cluster0.hng5bap.mongodb.net/?retryWrites=true&w=majority/marcas',
        uri: 'mongodb://localhost:27017/marcas',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    PersonasModule,
    MarcasModule,
    TiposModule
  ],
})


export class AppModule {}
//08VQsvPkxK8Pbyyy