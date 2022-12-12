import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { CreateFormDto } from './dto/create-form.dto';
import { CatalogoConst } from './const/catalogo.const';

@ApiTags('Catalogo')
@Controller('catalogo')
export class CatalogoController {
  constructor() {}

  @Get()
  findAll(@Req() request: Request) {
    if (Math.random() < 0.5) {
      return CatalogoConst;
    } else {
      throw new HttpException(
        'Hubo un error en la recopilación del catálogo (Este es un estado de ejemplo aleatorio)',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Post()
  create(@Body() createFormDto: CreateFormDto) {
    if (Math.random() < 0.5) {
      return 'Player';
    } else {
      throw new HttpException(
        'Hubo un error en la creación (Este es un estado de ejemplo aleatorio)',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
