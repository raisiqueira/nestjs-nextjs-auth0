import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ScopesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const scopes = this.reflector.get<string[]>('scopes', context.getHandler());
    Logger.log(`router scopes: ${scopes.toString()}`);
    if (!scopes) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request?.user;
    const userScopes = user?.scope as string;
    Logger.log(`user scopes: ${userScopes}`);
    const hasScope = () =>
      scopes.some((s) => userScopes?.split(' ').includes(s));
    return user && user?.scope && hasScope();
  }
}
