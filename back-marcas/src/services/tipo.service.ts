import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tipos, TiposDocument } from "../models/tipos.model";
import { TiposDto } from "../dto/tipo.dto";

@Injectable()
export class TiposService {

    constructor(@InjectModel(Tipos.name) private readonly tipoModel: Model<TiposDocument>) {}

    async findAll(): Promise<Tipos[]> {
        return this.tipoModel.find().exec();
    }

    async findOne(id: string): Promise<Tipos> {
        const tipo = await this.tipoModel.findById(id).exec();
        if (!tipo) {
            throw new NotFoundException('Tipo no encontrado');
        }
        return tipo;
    }

    async create(tipoDto: TiposDto): Promise<Tipos> {
        const createdTipo = new this.tipoModel(tipoDto);
        return createdTipo.save();
    }

    async update(id: string, tipoDto: TiposDto): Promise<Tipos> {
        const updatedTipo = await this.tipoModel.findByIdAndUpdate(id, tipoDto, { new: true }).exec();
        if (!updatedTipo) {
            throw new NotFoundException('Tipo no encontrado');
        }
        return updatedTipo;
    }

    async remove(id: string): Promise<void> {
        const result = await this.tipoModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('Tipo no encontrado');
        }
    }
}