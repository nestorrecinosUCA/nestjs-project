import { Module } from '@nestjs/common';
import { ConfigModuleOptions } from 'src/config/module/config.module';
import { DatabaseModule } from 'src/config/module/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModuleOptions, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
