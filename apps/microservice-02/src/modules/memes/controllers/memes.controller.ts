import { Controller, Get } from '@nestjs/common';
import { MemesService } from '../services/memes.service';

@Controller('memes')
export class MemesController {
  constructor(private memesServices: MemesService) {}

  @Get()
  getAllMemes() {
    return this.memesServices.getMemesFromMS();
  }
}
