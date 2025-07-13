import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EstagiarioService } from './estagiario.service';
import { CreateEstagiarioDto } from './dto/create-estagiario.dto';
import { UpdateEstagiarioDto } from './dto/update-estagiario.dto';

@Controller('estagiario')
export class EstagiarioController {

    constructor(private readonly estagiarioService: EstagiarioService) {}


    @Post()
    create(@Body() data: CreateEstagiarioDto) {
        return this.estagiarioService.create(data);
    }

    @Get()
    findAll() {
        return this.estagiarioService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.estagiarioService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() data: UpdateEstagiarioDto) {
        return this.estagiarioService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.estagiarioService.remove(Number(id));
    }
}
