import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemesModule } from './modules/memes/memes.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MemesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
