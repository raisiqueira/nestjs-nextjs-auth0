import { Test, TestingModule } from '@nestjs/testing';
import { AuthzService } from './authz.service';

describe('AuthzService', () => {
  let service: AuthzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthzService],
    }).compile();

    service = module.get<AuthzService>(AuthzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
