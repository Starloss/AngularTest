import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Starships, Starship } from 'src/app/interfaces/swapi.interfaces';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships: Starship[];
  next: string = null;
  prev: string = null;

  constructor( public swapi: SwapiService ) { }

  ngOnInit() {
    this.getStarships();
  }

  navigateForward() {
    this.swapi.navigate(this.next).subscribe( (resp: Starships) => {

      this.starships = resp.results;
      this.next = resp.next;
      this.prev = resp.previous;
    });
  }

  navigateBack() {
    this.swapi.navigate(this.prev).subscribe( (resp: Starships) => {

      this.starships = resp.results;
      this.next = resp.next;
      this.prev = resp.previous;
    });
  }

  getStarships() {
    this.swapi.getStarships().subscribe( (resp: Starships) => {

      this.starships = resp.results;
      this.next = resp.next;
      this.prev = resp.previous;
    });
  }

}
