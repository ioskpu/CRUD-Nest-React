// marcas.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Marcas, MarcasDocument } from '../models/marca.model';
import { MarcaDto } from '../dto/marca.dto';

@Injectable()
export class MarcasService {
  constructor(@InjectModel(Marcas.name) private marcaModel: Model<MarcasDocument>) {}

  async findAll(): Promise<Marcas[]> {
    return this.marcaModel.find().exec();
  }

  async findOne(id: string): Promise<Marcas> {
    const marca = await this.marcaModel.findById(id).exec();
    if (!marca) {
      throw new NotFoundException('Marca no encontrada');
    }
    return marca;
  }

  async create(marcaDto: MarcaDto): Promise<Marcas> {
    const createdMarca = new this.marcaModel(marcaDto);
    return createdMarca.save();
  }

  async update(id: string, marcaDto: MarcaDto): Promise<Marcas> {
    const updatedMarca = await this.marcaModel.findByIdAndUpdate(id, marcaDto, { new: true }).exec();
    if (!updatedMarca) {
      throw new NotFoundException('Marca no encontrada');
    }
    return updatedMarca;
  }

  async remove(id: string): Promise<void> {
    const result = await this.marcaModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Marca no encontrada');
    }
  }
}
