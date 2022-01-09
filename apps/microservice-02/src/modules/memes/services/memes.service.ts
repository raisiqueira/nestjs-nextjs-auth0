import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { concatMap, map } from 'rxjs';
import { AuthzService } from '../../authz/services/authz.service';

@Injectable()
export class MemesService {
  constructor(private authzService: AuthzService, private http: HttpService) {}

  /**
   * Returns a list of all memes from MS 01.
   */
  getMemesFromMS() {
    return this.authzService.loginOauth().pipe(
      map((response) => {
        if (!response?.access_token) {
          throw new Error("Can't get access token");
        }
        return response;
      }),
      concatMap((response) => {
        return this.http
          .get('http://localhost:5000/memes', {
            headers: {
              authorization: `Bearer ${response.access_token}`,
            },
          })
          .pipe(
            map((res) => {
              Logger.log('MemesService: getMemesFromMS success');
              return res?.data;
            }),
          );
      }),
    );
  }
}
