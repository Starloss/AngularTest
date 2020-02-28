import { Component, OnInit } from '@angular/core';
import { Character, Characters, Film } from 'src/app/interfaces/swapi.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  character: Character;
  listOfCharacters: string[] = [];
  charactersCharged = false;
  next: string = null;
  prev: string = null;
  count = 0;
  page = 1;

  constructor( public swapi: SwapiService ) { }

  ngOnInit() {

    this.listOfCharacters = this.swapi.seeCharacters();

    if ( this.listOfCharacters.length > 0 ) {

      this.chargeCharacters();

    } else {

      this.swapi.getCharacters().subscribe( (resp: Characters) => {
        this.characters = resp.results;
        this.next = resp.next;
        this.prev = resp.previous;
        this.count = resp.count;

        for (let character of this.characters) {

          character = this.requestFilms( character );
        }
      });
    }
  }

  navigateForward() {

    if (this.charactersCharged) {

      this.characters = [];

      this.page++;

      if (this.listOfCharacters.length > this.page * 10) {

        for ( this.count; this.count < this.page * 10; this.count++) {

          this.swapi.navigate( this.listOfCharacters[this.count] ).subscribe( (resp: Character) => {

            this.character = resp;

            this.character = this.requestFilms( this.character );

            this.characters.push( this.character );
          });
        }

        this.next = '';
        this.prev = '';

      } else {

        for ( this.count; this.count < this.listOfCharacters.length; this.count++) {

          this.swapi.navigate( this.listOfCharacters[this.count] ).subscribe( (resp: Character) => {

            this.character = resp;

            this.character = this.requestFilms( this.character );

            this.characters.push( this.character );
          });
        }

        this.next = null;
        this.prev = '';
      }
    } else {

      this.swapi.navigate(this.next).subscribe( (resp: Characters) => {
        this.characters = resp.results;
        this.next = resp.next;
        this.prev = resp.previous;
        this.count = resp.count;

        for (let character of this.characters) {

          character = this.requestFilms( character );
        }
      });
    }
  }

  navigateBack() {

    if (this.charactersCharged) {

      this.characters = [];

      this.page--;
      this.count = (this.page - 1) * 10;

      if (this.listOfCharacters.length > this.page * 10) {

        for ( this.count; this.count < this.page * 10; this.count++) {

          this.swapi.navigate( this.listOfCharacters[this.count] ).subscribe( (resp: Character) => {

            this.character = resp;

            this.character = this.requestFilms( this.character );

            this.characters.push( this.character );
          });
        }

        this.next = '';

        if ( this.count > 10 ) {
          this.prev = '';

        } else {
          this.prev = null;
        }

      } else {

        for ( this.count; this.count < this.listOfCharacters.length; this.count++) {

          this.swapi.navigate( this.listOfCharacters[this.count] ).subscribe( (resp: Character) => {

            this.character = resp;

            this.character = this.requestFilms( this.character );

            this.characters.push( this.character );
          });
        }

        this.next = '';

        if ( this.count > 10 ) {
          this.prev = '';

        } else {
          this.prev = null;
        }
      }

    } else {

      this.swapi.navigate(this.prev).subscribe( (resp: Characters) => {
        this.characters = resp.results;
        this.next = resp.next;
        this.prev = resp.previous;
        this.count = resp.count;

        for (let character of this.characters) {

          character = this.requestFilms( character );
        }
      });
    }
  }

  requestFilms(character: Character) {

    const FilmsRequested: Film[] = [];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < character.films.length; i++) {

      this.swapi.navigate( character.films[i] ).subscribe( (resp: Film) => {

        FilmsRequested.push(resp);
      });
    }

    character.filmsRequested = FilmsRequested;

    return character;
  }

  chargeCharacters() {

    this.charactersCharged = true;

    if (this.listOfCharacters.length > this.page * 10) {

      for ( this.count; this.count < this.page * 10; this.count++) {

        this.swapi.navigate( this.listOfCharacters[this.count] ).subscribe( (resp: Character) => {

          this.character = resp;

          this.character = this.requestFilms( this.character );

          this.characters.push( this.character );
        });
      }

      this.next = '';

    } else {

      for ( this.count; this.count < this.listOfCharacters.length; this.count++) {

        this.swapi.navigate( this.listOfCharacters[this.count] ).subscribe( (resp: Character) => {

          this.character = resp;

          this.character = this.requestFilms( this.character );

          this.characters.push( this.character );
        });
      }
    }
  }

  getFilmCharacters(film: Film) {

    this.listOfCharacters = film.characters;
    this.characters = [];
    this.page = 1;
    this.count = 0;

    this.chargeCharacters();
  }

}
