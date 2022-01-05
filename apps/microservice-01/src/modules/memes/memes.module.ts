import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthenticationMiddleware } from '../authz/authz.middleware';
import { MemesController } from './memes.controller';

@Module({
  imports: [HttpModule],
  controllers: [MemesController],
})
export class MemesModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware).forRoutes(MemesController);
  }
}
