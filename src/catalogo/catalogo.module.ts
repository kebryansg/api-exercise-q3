import { Module } from '@nestjs/common';
import { CatalogoController } from './catalogo.controller';

@Module({
  imports: [],
  controllers: [CatalogoController],
})
export class CatalogoModule {}
