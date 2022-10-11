import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('tv')
export class TvShows {
  constructor(private readonly appService: AppService) {}

  @Get('popular')
  trendingMovies() {
    return this.appService.trendingTvShows();
  }
}
