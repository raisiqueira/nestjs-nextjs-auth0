import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { OauthResponseModel } from '../models/authz.model';

@Injectable()
export class AuthzService {
  private readonly oauthURL = process.env.AUTH0_OAUTH_URL;
  private readonly oauthClientID = process.env.AUTH0_CLIENT_ID;
  private readonly oauthClientSecret = process.env.AUTH0_CLIENT_SECRET;
  private readonly oauthAudience = process.env.AUTH0_AUDIENCE;
  private readonly oauthGrantType = process.env.AUTH0_GRANT_TYPE;

  constructor(private http: HttpService) {}

  loginOauth(): Observable<OauthResponseModel> {
    return this.http
      .post<OauthResponseModel>(this.oauthURL, {
        client_id: this.oauthClientID,
        client_secret: this.oauthClientSecret,
        audience: this.oauthAudience,
        grant_type: this.oauthGrantType,
      })
      .pipe(
        map((response) => {
          Logger.log(`Login oauth success!`);
          return response.data;
        }),
      );
  }
}
