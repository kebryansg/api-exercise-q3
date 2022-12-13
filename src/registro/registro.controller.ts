import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFormDto } from './dto/create-form.dto';

@ApiTags('Registro')
@Controller('registro')
export class RegistroController {
  constructor() {}

  @Post()
  create(@Body() createFormDto: CreateFormDto) {
    if (Math.random() < 0.6) {
      return {
        statusCode: 'success',
        message: 'Formulario enviado correctamente',
      };
    } else {
      throw new HttpException(
        'Hubo un error en la creación (Este es un estado de ejemplo aleatorio)',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
