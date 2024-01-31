import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Persona, PersonaDocument }  from '../models/persona.model';
import { PersonaDto } from '../dto/persona.dto';

@Injectable()
export class PersonaService {
  constructor(@InjectModel(Persona.name) private personaModel: Model<PersonaDocument>) {}

  async findAll(): Promise<Persona[]> {
    return this.personaModel.find().exec();
  }

  async findOne(id: string): Promise<Persona> {
    const persona = await this.personaModel.findById(id).exec();
    if (!persona) {
      throw new NotFoundException('Persona no encontrada');
    }
    return persona;
  }

  async create(personaDto: PersonaDto): Promise<Persona> {
    const createdPersona = new this.personaModel(personaDto);
    return createdPersona.save();
  }

  async update(id: string, personaDto: PersonaDto): Promise<Persona> {
    const updatedPersona = await this.personaModel.findByIdAndUpdate(id, personaDto, { new: true }).exec();
    if (!updatedPersona) {
      throw new NotFoundException('Persona no encontrada');
    }
    return updatedPersona;
  }

  async remove(id: string): Promise<void> {
    const result = await this.personaModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Persona no encontrada');
    }
  }
}
