import { Component, inject, OnInit } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { BannerComponent } from '../../core/components/banner/banner.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { MoviesService } from '../../shared/services/movies.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '../../shared/model/video-content.interface';


@Component({
  selector: 'app-browse',
  imports: [CommonModule, BannerComponent, HeaderComponent, MovieCarouselComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit {
  bannerDetail$ = new Observable<any>();
  bannerVideo$ = new Observable<any>();

  movieService = inject(MoviesService);

  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated()
  ];

  ngOnInit(): void {
    forkJoin(this.sources)
      .pipe(
        map(([movies, tvShows, ratedMovies, nowPlaying, upcoming, popular]) => {
          this.bannerDetail$ = this.movieService.getBannerDetail(movies.results[0].id);
          this.bannerVideo$ = this.movieService.getBannerVideo(movies.results[0].id);
          return { movies, tvShows, ratedMovies, nowPlaying, upcoming, popular }
        })
      ).subscribe((res: any) => {
        this.movies = res.movies.results as IVideoContent[];
        this.tvShows = res.tvShows.results as IVideoContent[];
        this.ratedMovies = res.ratedMovies.results as IVideoContent[];
        this.nowPlayingMovies = res.nowPlaying.results as IVideoContent[];
        this.upcomingMovies = res.upcoming.results as IVideoContent[];
        this.popularMovies = res.popular.results as IVideoContent[];
        this.getMovieKey();
      })
  }

  getMovieKey() {
    this.movieService.getBannerVideo(this.movies[0].id)
      .subscribe(res => {
        console.log(res);
      })
  }

}

