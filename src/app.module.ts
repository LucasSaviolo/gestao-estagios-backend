import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';
import { EstagiarioModule } from './estagiario/estagiario.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, EmpresaModule, EstagiarioModule, RelatorioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
