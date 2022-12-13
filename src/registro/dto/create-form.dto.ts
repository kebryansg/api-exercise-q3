import { Form } from '../../catalogo/interfaces/form';
import {IsArray, IsString, IsNotEmpty, IsBoolean} from 'class-validator';

type CreateForm = Omit<Form, 'id'>;

export class CreateFormDto implements CreateForm {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  lastname: string;
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsNotEmpty()
  @IsString()
  phone: string;
  @IsNotEmpty()
  @IsString()
  provincia: string;
  @IsNotEmpty()
  @IsString()
  ciudad: string;
  @IsNotEmpty()
  @IsArray()
  productos: Array<string>;
  @IsNotEmpty()
  @IsBoolean()
  informacion: boolean;
}
