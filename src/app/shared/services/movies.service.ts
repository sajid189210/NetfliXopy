import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options = {
  params: {
    include_audit: false,
    include_video: true,
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTQ3YTM1NTA2NTM1YTA4ZmU1MjQ2NzA1NTczYmQyYyIsIm5iZiI6MTczNzcxODY4OS45NDIwMDAyLCJzdWIiOiI2NzkzN2JhMTU1OWUyZDk3NGI0ODM2NGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4FXv_nXoGZ7NVgENmPQlDGZj4umYg0LWLm-KPJhDjL0'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private httpClient = inject(HttpClient);

  getMovies() {
    return this.httpClient.get<any>('https://api.themoviedb.org/3/discover/movie', options)
  }

  getTvShows() {
    return this.httpClient.get('https://api.themoviedb.org/3/discover/tv', options)
  }

  // getRatedMovies() {
  //   return this.httpClient.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options)
  // }


  getBannerImage(id: number) {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {    
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/now_playing', options)
  }

  getPopularMovies() {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/popular', options)
  }

  getTopRated() {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/top_rated', options)
  }

  getUpcomingMovies() {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/upcoming', options)
  }

}
