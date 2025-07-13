import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateRelatorioDto } from './dto/update-relatorio.dto';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';

@Injectable()
export class RelatorioService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateRelatorioDto) {
    return this.prismaService.relatorio.create({
      data: {
        titulo: data.titulo,
        descricao: data.descricao,
        dataEnvio: new Date(`${data.dataEnvio}T03:00:00`).toISOString(), // manual para nao ficar 1 dia a menos qns salvar
        estagiarioId: Number(data.estagiarioId),
      },
    });
  }

  findAll() {
    return this.prismaService.relatorio.findMany({
      include: {
        estagiario: true,
      },
    });
  }

  findByDataEnvio(dataEnvio: string) {
    return this.prismaService.relatorio.findMany({
      where: {
        dataEnvio: {
          contains: dataEnvio,
        },
      },
      include: { estagiario: true },
    });
  }

  async findOne(id: number) {
    const relatorio = await this.prismaService.relatorio.findUnique({
      where: { id },
      include: {
        estagiario: true,
      },
    });

    if (!relatorio) {
      throw new NotFoundException(
        `Relatório com o ID ${id} não foi encontrado.`,
      );
    }
    return relatorio;
  }

  async update(id: number, data: UpdateRelatorioDto) {
    const dadosParaAtualizar: any = { ...data };

    if (data.estagiarioId) {
      dadosParaAtualizar.estagiarioId = Number(data.estagiarioId);
    }

    if (data.dataEnvio) {
      // dadosParaAtualizar.dataEnvio = new Date(
      //   '${data.dataEnvio}T03:00:00.000Z',
      // );
      dadosParaAtualizar.dataEnvio = `${data.dataEnvio}T03:00:00.000Z`;
    }
    return this.prismaService.relatorio.update({
      where: { id },
      data: dadosParaAtualizar,
    });
  }

  delete(id: number) {
    return this.prismaService.relatorio.delete({
      where: { id },
    });
  }
}
