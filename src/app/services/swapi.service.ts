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

  getPlanets(page = 1) {
    return this.http.get(this.baseUrl + 'planets/?page=' + page);
  }

  getPlanet(id) {
    return this.http.get(this.baseUrl + 'planets/' + id);
  }

  getSpecies(page = 1) {
    return this.http.get(this.baseUrl + 'species/?page=' + page);
  }

  getSpecie(id) {
    return this.http.get(this.baseUrl + 'species/' + id);
  }

  getStarships(page = 1) {
    return this.http.get(this.baseUrl + 'starships/?page=' + page);
  }

  getStarship(id) {
    return this.http.get(this.baseUrl + 'starship/' + id);
  }

  getVehicles(page = 1) {
    return this.http.get(this.baseUrl + 'vehicles/?page=' + page);
  }

  getVehicle(id) {
    return this.http.get(this.baseUrl + 'vehicle/' + id);
  }
}
