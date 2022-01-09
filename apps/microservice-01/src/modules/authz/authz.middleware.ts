import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const MAIN_ALGORITHM = process.env.AUTH0_MAIN_ALGO;
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    jwt({
      secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${AUTH0_DOMAIN}/.well-known/jwks.json`,
      }),
      issuer: `${AUTH0_DOMAIN}/`,
      algorithms: [MAIN_ALGORITHM],
    })(req, res, (err) => {
      Logger.log(`Auth Middleware success`);
      if (err) {
        Logger.error(`Error middleware: ${err?.message}`);
        const status = err.status || 500;
        const message =
          err.message || 'Sorry we were unable to process your request.';
        return res.status(status).send({
          message,
        });
      }
      next();
    });
  }
}
