import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScopesGuard } from './modules/core/guards/scopes.guard';
import { MemesModule } from './modules/memes/memes.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MemesModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ScopesGuard,
    },
  ],
})
export class AppModule {}
