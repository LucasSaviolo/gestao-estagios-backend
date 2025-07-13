import { Module } from '@nestjs/common';
import { EstagiarioController } from './estagiario.controller';
import { EstagiarioService } from './estagiario.service';

@Module({
  controllers: [EstagiarioController],
  providers: [EstagiarioService],
})
export class EstagiarioModule {}
