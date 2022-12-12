import { Module } from '@nestjs/common';
import { EstadosController } from './estados.controller';

@Module({
  imports: [],
  controllers: [EstadosController],
  providers: [],
})
export class EstadoModule {}
