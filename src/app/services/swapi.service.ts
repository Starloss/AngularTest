import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  baseUrl = 'https://swapi.co/api/';

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get(this.baseUrl + 'films');
  }

  getFilm(id) {
    return this.http.get(this.baseUrl + 'films/' + id);
  }

  getCharacters(page = 1) {
    return this.http.get(this.baseUrl + 'people/?page=' + page);
  }

  getCharacter(id) {
    return this.http.get(this.baseUrl + 'people/' + id);
  }
}
