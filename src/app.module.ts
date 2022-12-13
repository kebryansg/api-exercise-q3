import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environments } from '../config/environments';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { EstadoModule } from './estados/estado.module';
import { RegistroModule } from './registro/registro.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    CatalogoModule,
    EstadoModule,
    RegistroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
