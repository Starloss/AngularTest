import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Films, Film } from '../../interfaces/swapi.interfaces';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[];
  filmsOriginal: Film[];
  next = '';
  prev = '';
  count = 0;
  showingCrawl = false;
  asc = true;
  previousOrder = '';
  numStars = 100;
  title = '';
  episode: number;
  openCrawl = '';
  innerWidth;

  constructor( public swapi: SwapiService ) { }

  ngOnInit() {

    this.innerWidth = window.innerWidth;

    this.swapi.getFilms().subscribe( (resp: Films) => {
      this.films = resp.results;
      this.filmsOriginal = resp.results;
      this.next = resp.next;
      this.prev = resp.previous;
      this.count = resp.count;

      this.sortBy('Date');
    });
  }

  sortBy( param: string ) {

    this.films = this.filmsOriginal;

    if ( param === 'Date' ) {

      if ( this.previousOrder === 'Date' ) {

        if ( this.asc ) {

          this.asc = !this.asc;

          this.films.sort((a, b) => {

            return ((a.release_date < b.release_date) ? -1 : 1);
          });

        } else {

          this.asc = !this.asc;

          this.films.sort((a, b) => {

            return ((a.release_date < b.release_date) ? 1 : -1);
          });
        }

      } else {

        this.asc = false;
        this.previousOrder = 'Date';

        this.films.sort((a, b) => {

          return ((a.release_date < b.release_date) ? -1 : 1);
        });
      }

    } else {

      if ( param === 'Director' ) {

        if ( this.previousOrder === 'Director' ) {

          if ( this.asc ) {

            this.asc = !this.asc;

            this.films.sort((a, b) => {

              return ((a.director < b.director) ? -1 : 1);
            });

          } else {

            this.asc = !this.asc;

            this.films.sort((a, b) => {

              return ((a.director < b.director) ? 1 : -1);
            });
          }

        } else {

          this.asc = false;
          this.previousOrder = 'Director';

          this.films.sort((a, b) => {

            return ((a.director < b.director) ? -1 : 1);
          });
        }

      } else {

        if ( param === 'Title' ) {

          if ( this.previousOrder === 'Title' ) {

            if ( this.asc ) {

              this.asc = !this.asc;

              this.films.sort((a, b) => {

                return ((a.title < b.title) ? -1 : 1);
              });

            } else {

              this.asc = !this.asc;

              this.films.sort((a, b) => {

                return ((a.title < b.title) ? 1 : -1);
              });
            }

          } else {

            this.asc = false;
            this.previousOrder = 'Title';

            this.films.sort((a, b) => {

              return ((a.title < b.title) ? -1 : 1);
            });
          }

        } else {

          if ( param === 'Episode' ) {

            if ( this.previousOrder === 'Episode' ) {

              if ( this.asc ) {

                this.asc = !this.asc;

                this.films.sort((a, b) => {

                  return ((a.episode_id < b.episode_id) ? -1 : 1);
                });

              } else {

                this.asc = !this.asc;

                this.films.sort((a, b) => {

                  return ((a.episode_id < b.episode_id) ? 1 : -1);
                });
              }

            } else {

              this.asc = false;
              this.previousOrder = 'Episode';

              this.films.sort((a, b) => {

                return ((a.episode_id < b.episode_id) ? -1 : 1);
              });
            }
          }
        }
      }
    }
  }

  openingCrawl(film: Film) {
    this.showingCrawl = true;

    for (let i = 0; i < this.numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const xy = this.getRandomPosition();
      star.style.top = xy[0] + 'px';
      star.style.left = xy[1] + 'px';
      document.body.append(star);
    }

    this.title = film.title;
    this.episode = film.episode_id;
    this.openCrawl = film.opening_crawl;
  }

  dismissCover() {
    this.showingCrawl = false;
  }

  getRandomPosition() {
    const y = window.innerWidth;
    const x = window.innerHeight;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
  }

  openCharacters(film: Film) {
    this.swapi.setCharacters(film.characters);
  }

  searchFilm( searchText = '' ) {
    this.swapi.searchFilms( searchText ).subscribe( (resp: Films) => {
      this.films = resp.results;
      this.filmsOriginal = resp.results;
      this.next = resp.next;
      this.prev = resp.previous;
      this.count = resp.count;

      this.sortBy('Date');
    });
  }
}
