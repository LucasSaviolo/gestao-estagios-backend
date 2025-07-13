import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresaService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: CreateEmpresaDto) {
    return this.prismaService.empresa.create({ data });
  }

  findAll() {
    return this.prismaService.empresa.findMany();
  }

  async findOne(id: number) {
    const empresa = await this.prismaService.empresa.findUnique({
      where: { id },
    });
    if (!empresa) {
      throw new NotFoundException(`Empresa com ID ${id} não encontrada.`);
    }
    return empresa;
  }

  async update(id: number, data: UpdateEmpresaDto) {
    await this.findOne(id);
    return this.prismaService.empresa.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prismaService.empresa.delete({
      where: { id },
    });
  }
}
