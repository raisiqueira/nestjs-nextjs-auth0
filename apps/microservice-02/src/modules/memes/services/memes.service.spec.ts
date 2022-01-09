import { Test, TestingModule } from '@nestjs/testing';
import { MemesService } from './memes.service';

describe('MemesService', () => {
  let service: MemesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemesService],
    }).compile();

    service = module.get<MemesService>(MemesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
