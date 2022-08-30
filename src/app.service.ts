import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API Exercise Q3 - Chapter Frontend';
  }
}
