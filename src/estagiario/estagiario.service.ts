import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEstagiarioDto } from './dto/create-estagiario.dto';
import { UpdateEstagiarioDto } from './dto/update-estagiario.dto';

@Injectable()
export class EstagiarioService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: CreateEstagiarioDto) {
    return this.prismaService.estagiario.create({
      data: {
        ...data,
        empresaId: Number(data.empresaId),
      },
    });
  }

  findAll() {
    return this.prismaService.estagiario.findMany();
  }

  findOne(id: number) {
    return this.prismaService.estagiario.findUnique({
      where: { id },
      include: { empresa: true },
    });
  }

  findByCurso(curso: string) {
    return this.prismaService.estagiario.findMany({
      where: { curso: { contains: curso } },
    });
  }

  async update(id: number, data: UpdateEstagiarioDto) {
    const estagiario = await this.prismaService.estagiario.findUnique({
      where: { id: Number(id) },
    });
    if (!estagiario) throw new NotFoundException('Estagiário não encontrado');

    if (data.empresaId) {
      const empresaExiste = await this.prismaService.empresa.findUnique({
        where: { id: data.empresaId },
      });
      if (!empresaExiste) {
        throw new NotFoundException('Empresa não encontrada');
      }
    }
    // remover campos proibiodos para parar o erro na atualizaçãop *******************
    const camposProibidos = ['id', 'empresa', 'relatorio'];
    for (const campo of camposProibidos) {
      if (campo in data) delete (data as any)[campo];
    }

    return this.prismaService.estagiario.update({
      where: { id: Number(id) },
      data,
    });
  }

  remove(id: number) {
    return this.prismaService.estagiario.delete({
      where: { id },
    });
  }
}
