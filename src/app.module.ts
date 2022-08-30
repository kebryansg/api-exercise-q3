import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { environments } from "../config/environments";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database.module";
import { PlayerModule } from "./player/player.module";
import { PositionModule } from "./position/position.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || ".env",
      isGlobal: true
    }),
    DatabaseModule,
    PlayerModule,
    PositionModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
