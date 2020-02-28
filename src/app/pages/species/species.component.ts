import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Species, Specie, Planet } from 'src/app/interfaces/swapi.interfaces';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species: Specie[];
  next: string = null;
  prev: string = null;

  constructor( public swapi: SwapiService ) { }

  ngOnInit() {
    this.getSpecies();
  }

  navigateForward() {
    this.swapi.navigate(this.next).subscribe( (resp: Species) => {

      this.species = resp.results;
      this.next = resp.next;
      this.prev = resp.previous;
    });
  }

  navigateBack() {
    this.swapi.navigate(this.prev).subscribe( (resp: Species) => {

      this.species = resp.results;
      this.next = resp.next;
      this.prev = resp.previous;
    });
  }

  getSpecies() {
    this.swapi.getSpecies().subscribe( (resp: Species) => {

      this.species = resp.results;
      this.next = resp.next;
      this.prev = resp.previous;

      for (let specie of this.species) {
        specie = this.requestHomeworld(specie);
      }
    });
  }

  requestHomeworld(specie: Specie) {
    let homeworldRequested: Planet;

    this.swapi.navigate( specie.homeworld ).subscribe( (resp: Planet) => {

      homeworldRequested = resp;
      specie.homeworldRequired = homeworldRequested;
    });

    return specie;
  }

}
