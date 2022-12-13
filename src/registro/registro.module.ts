import { Module } from '@nestjs/common';
import { RegistroController } from './registro.controller';

@Module({
  imports: [],
  controllers: [RegistroController],
})
export class RegistroModule {}
