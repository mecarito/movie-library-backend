import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { request } from 'undici';

@Injectable()
export class AppService {
  url = process.env.BASE_URL;
  apiKey = process.env.API_KEY;

  constructor(private readonly httpService: HttpService) {}

  async getUpcommingMovies() {
    const { statusCode, headers, trailers, body } = await request(
      `${this.url}movie/upcoming?api_key=${this.apiKey}`,
    );
    const data = await body.json();
    return data;
  }
}
