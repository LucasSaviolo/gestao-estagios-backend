import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEmail,
  IsInt,
} from 'class-validator';

export class CreateEstagiarioDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsString()
  curso: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @IsInt()
  empresaId: number;
}
