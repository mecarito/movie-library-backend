import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('movies')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('upcomming')
  UpcommingMovies() {
    return this.appService.UpcommingMovies();
  }

  @Get('trending/all')
  trendingMovies() {
    return this.appService.trendingAll();
  }

  @Get('trending/movies')
  trendingTvShows() {
    return this.appService.trendingMovies();
  }

  @Get('categories')
  MovieCategories() {
    return this.appService.movieCategoreis();
  }

  @Get('category')
  sortMovies(@Query('genre') genre) {
    return this.appService.sortMovies(genre);
  }
}
