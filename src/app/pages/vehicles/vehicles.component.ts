import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Vehicles } from 'src/app/interfaces/swapi.interfaces';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicles;
  next = '';
  prev = '';

  constructor( public swapi: SwapiService ) { }

  ngOnInit() {
    this.swapi.getVehicles().subscribe( (resp: any) => {
      this.vehicles = resp;
    });
  }

}
