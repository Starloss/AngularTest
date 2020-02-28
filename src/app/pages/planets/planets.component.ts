import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Planets } from 'src/app/interfaces/swapi.interfaces';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: Planets;
  next = '';
  prev = '';

  constructor( public swapi: SwapiService ) { }

  ngOnInit() {
    this.swapi.getPlanets().subscribe( (resp: any) => {
      this.planets = resp;
    });
  }

}
