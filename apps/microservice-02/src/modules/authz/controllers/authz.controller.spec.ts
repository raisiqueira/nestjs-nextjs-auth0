import { Test, TestingModule } from '@nestjs/testing';
import { AuthzController } from './authz.controller';

describe('AuthzController', () => {
  let controller: AuthzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthzController],
    }).compile();

    controller = module.get<AuthzController>(AuthzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
