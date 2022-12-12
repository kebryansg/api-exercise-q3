import { Form } from '../interfaces/form';

type CreateForm = Omit<Form, 'id'>;

export class CreateFormDto implements CreateForm {
  ciudad: string;
  email: string;
  informacion: boolean;
  lastname: string;
  name: string;
  phone: string;
  productos: Array<string>;
  provincia: string;
}
