import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { RelatorioService } from './relatorio.service';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';
import { UpdateRelatorioDto } from './dto/update-relatorio.dto';

@Controller('relatorio')
export class RelatorioController {
  constructor(private readonly relatorioService: RelatorioService) {}

  @Post()
  create(@Body() data: CreateRelatorioDto) {
    return this.relatorioService.create(data);
  }

  @Get()
  findAll(@Query('dataEnvio') dataEnvio?: string) {
    if (dataEnvio) {
      return this.relatorioService.findByDataEnvio(dataEnvio);
    }
    return this.relatorioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.relatorioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateRelatorioDto) {
    return this.relatorioService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.relatorioService.delete(+id);
  }
}
