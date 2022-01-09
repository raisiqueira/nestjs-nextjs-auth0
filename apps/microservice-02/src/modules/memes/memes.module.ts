import { Module } from '@nestjs/common';
import { MemesService } from './services/memes.service';
import { MemesController } from './controllers/memes.controller';
import { AuthzModule } from '../authz/authz.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [AuthzModule, HttpModule],
  providers: [MemesService],
  controllers: [MemesController],
})
export class MemesModule {}
