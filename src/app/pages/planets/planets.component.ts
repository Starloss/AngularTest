import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Planets, Planet } from 'src/app/interfaces/swapi.interfaces';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: Planet[];
  next: string = null;
  prev: string = null;

  constructor( public swapi: SwapiService ) { }

  ngOnInit() {
    this.getPlanets();
  }

  navigateForward() {
    this.swapi.navigate(this.next).subscribe( (resp: Planets) => {

      this.planets = resp.results;
      this.next = resp.next;
      this.prev = resp.previous;
    });
  }

  navigateBack() {
    this.swapi.navigate(this.prev).subscribe( (resp: Planets) => {

      this.planets = resp.results;
      this.next = resp.next;
      this.prev = resp.previous;
    });
  }

  getPlanets() {
    this.swapi.getPlanets().subscribe( (resp: Planets) => {

      this.planets = resp.results;
      this.next = resp.next;
      this.prev = resp.previous;
    });
  }

}
