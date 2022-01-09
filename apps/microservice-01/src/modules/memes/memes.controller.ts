import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';
import { map } from 'rxjs';
import { Scopes } from '../core/decorators/Scope.decorator';
import { MemesModel } from './memes.model';

@Controller('memes')
export class MemesController {
  private readonly baseUrl = 'https://api.imgflip.com';
  constructor(private http: HttpService) {}

  @Get()
  @Scopes(['view:memes'])
  getMemes() {
    return this.http.get<MemesModel>(`${this.baseUrl}/get_memes`).pipe(
      map((response) => {
        return response?.data;
      }),
    );
  }
}
