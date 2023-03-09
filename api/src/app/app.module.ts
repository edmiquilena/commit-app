import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CommitsModule } from "./commits/commits.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CommitsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
