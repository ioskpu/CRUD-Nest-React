// marcas.controller.ts

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MarcasService } from '../services/marcas.service';
import { MarcaDto } from '../dto/marca.dto';

@Controller('marcas')
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}

  @Get()
  findAll() {
    return this.marcasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marcasService.findOne(id);
  }

  @Post()
  create(@Body() marcaDto: MarcaDto) {
    return this.marcasService.create(marcaDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() marcaDto: MarcaDto) {
    return this.marcasService.update(id, marcaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marcasService.remove(id);
  }
}
