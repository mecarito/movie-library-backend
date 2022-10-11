import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { TvShows } from './tv.shows.controller';
import { Search } from './search.controller';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [AppController, TvShows, Search],
  providers: [AppService],
})
export class AppModule {}
