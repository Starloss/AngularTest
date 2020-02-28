import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Films, Character } from '../interfaces/swapi.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  baseUrl = 'https://swapi.co/api/';
  characters: string[] = [];

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get(this.baseUrl + 'films/');
  }

  getFilm(id): Observable<any> {
    return this.http.get(this.baseUrl + 'films/' + id);
  }

  getCharacters(page = 1): Observable<any> {
    return this.http.get(this.baseUrl + 'people/?page=' + page);
  }

  getCharacter(id): Observable<any> {
    return this.http.get(this.baseUrl + 'people/' + id);
  }

  getPlanets(page = 1): Observable<any> {
    return this.http.get(this.baseUrl + 'planets/?page=' + page);
  }

  getPlanet(id): Observable<any> {
    return this.http.get(this.baseUrl + 'planets/' + id);
  }

  getSpecies(page = 1): Observable<any> {
    return this.http.get(this.baseUrl + 'species/?page=' + page);
  }

  getSpecie(id): Observable<any> {
    return this.http.get(this.baseUrl + 'species/' + id);
  }

  getStarships(page = 1): Observable<any> {
    return this.http.get(this.baseUrl + 'starships/?page=' + page);
  }

  getStarship(id): Observable<any> {
    return this.http.get(this.baseUrl + 'starship/' + id);
  }

  getVehicles(page = 1): Observable<any> {
    return this.http.get(this.baseUrl + 'vehicles/?page=' + page);
  }

  getVehicle(id): Observable<any> {
    return this.http.get(this.baseUrl + 'vehicle/' + id);
  }

  navigate(url): Observable<any> {
    return this.http.get(url);
  }

  setCharacters(sc: string[]) {
    this.characters = sc;
  }

  seeCharacters() {
    if (this.characters.length > 0) {
      return this.characters;

    } else {

      return [];
    }
  }

  searchFilms(searchText: string) {
    return this.http.get(this.baseUrl + 'films/?search=' + searchText);
  }
}
