import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TiposService } from '../services/tipo.service';
import { TiposDto } from '../dto/tipo.dto';

@Controller('tipos')
export class TiposController {
    constructor(private readonly tiposService: TiposService) {}

    @Post()
    create(@Body() tipoDto: TiposDto) {
        return this.tiposService.create(tipoDto);
    }

    @Get()
    findAll() {
        return this.tiposService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tiposService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() tipoDto: TiposDto) {
        return this.tiposService.update(id, tipoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.tiposService.remove(id);
    }
}