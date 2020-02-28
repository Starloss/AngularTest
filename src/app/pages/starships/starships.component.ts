import { Component, OnInit } from '@angular/core';
import { Starships } from 'src/app/interfaces/swapi.interfaces';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships: Starships;
  next = '';
  prev = '';

  constructor( public swapi: SwapiService ) { }

  ngOnInit() {
    this.swapi.getStarships().subscribe( (resp: any) => {
      this.starships = resp;
    });
  }

}
