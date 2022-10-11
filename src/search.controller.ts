import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('search')
export class Search {
  constructor(private readonly appService: AppService) {}

  @Get()
  trendingMovies(@Query('query') query) {
    return this.appService.search(query);
  }
}
