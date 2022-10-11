import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { request } from 'undici';

@Injectable()
export class AppService {
  url = process.env.BASE_URL;
  apiKey = process.env.API_KEY;

  constructor(private readonly httpService: HttpService) {}

  async UpcommingMovies() {
    const { body } = await request(
      `${this.url}movie/upcoming?api_key=${this.apiKey}`,
    );
    const data = await body.json();
    return data.results;
  }

  async trendingAll() {
    const { body } = await request(
      `${this.url}trending/all/week?api_key=${this.apiKey}`,
    );
    const data = await body.json();
    return data.results;
  }

  async trendingMovies() {
    const { body } = await request(
      `${this.url}trending/movie/week?api_key=${this.apiKey}`,
    );
    const data = await body.json();
    return data.results;
  }

  async movieCategoreis() {
    const { body } = await request(
      `${this.url}genre/movie/list?api_key=${this.apiKey}`,
    );
    const data = await body.json();
    return data.genres;
  }

  async trendingTvShows() {
    const { body } = await request(
      `${this.url}tv/popular?api_key=${this.apiKey}`,
    );
    const data = await body.json();
    return data.results;
  }

  async search(query: string) {
    const result = [];
    const { body: movieBody } = await request(
      `${this.url}search/movie?api_key=${this.apiKey}&query=${query}`,
    );
    const { body: tvBody } = await request(
      `${this.url}
      search/tv?api_key=${this.apiKey}&query=${query}`,
    );
    const movies = await movieBody.json();
    const tvShows = await tvBody.json();

    if (Array(movies.results) && movies.results !== undefined) {
      result.push(...movies.results);
    }

    if (Array(tvShows.results) && tvShows.results !== undefined) {
      result.push(...tvShows.results);
    }

    return result;
  }

  async sortMovies(genre: number) {
    console.log(genre);
    const result = [];
    `https://api.themoviedb.org/3/discover/movie?api_key={{api_key}}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=28,53`;

    const { body: movieBody } = await request(
      `${this.url}discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${genre}`,
    );

    const movies = await movieBody.json();

    if (Array(movies.results) && movies.results !== undefined) {
      result.push(...movies.results);
    }

    return result;
  }
}
