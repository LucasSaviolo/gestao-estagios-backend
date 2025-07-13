import { IsNotEmpty, IsString, IsInt, IsDate } from 'class-validator';

export class CreateRelatorioDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsDate()
  dataEnvio: string;

  @IsNotEmpty()
  @IsInt()
  estagiarioId: number;
}
