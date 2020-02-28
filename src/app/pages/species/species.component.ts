import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Species } from 'src/app/interfaces/swapi.interfaces';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species: Species;
  next = '';
  prev = '';

  constructor( public swapi: SwapiService ) { }

  ngOnInit() {
    this.swapi.getSpecies().subscribe( (resp: any) => {
      this.species = resp;
    });
  }

}
