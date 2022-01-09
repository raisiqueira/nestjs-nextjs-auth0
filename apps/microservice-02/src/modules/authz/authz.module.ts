import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthzController } from './controllers/authz.controller';
import { AuthzService } from './services/authz.service';

@Module({
  imports: [HttpModule],
  controllers: [AuthzController],
  providers: [AuthzService],
  exports: [AuthzService],
})
export class AuthzModule {}
