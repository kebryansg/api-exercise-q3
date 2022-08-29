import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { PositionModule } from './position/position.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'adm12345',
      database: 'legends',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PlayerModule,
    PositionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
