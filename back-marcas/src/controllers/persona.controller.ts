import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PersonaService } from '../services/persona.service';
import { PersonaDto } from '../dto/persona.dto';

@Controller('personas')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Get()
  findAll() {
    return this.personaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personaService.findOne(id);
  }

  @Post()
  create(@Body() personaDto: PersonaDto) {
    return this.personaService.create(personaDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() personaDto: PersonaDto) {
    return this.personaService.update(id, personaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personaService.remove(id);
  }
}
