import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Vehicles, Vehicle } from 'src/app/interfaces/swapi.interfaces';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[];
  next: string = null;
  prev: string = null;

  constructor( public swapi: SwapiService ) { }

  ngOnInit() {
    this.getVehicles();
  }

  navigateForward() {
    this.swapi.navigate(this.next).subscribe( (resp: Vehicles) => {

      this.vehicles = resp.results;
      this.next = resp.next;
      this.prev = resp.previous;
    });
  }

  navigateBack() {
    this.swapi.navigate(this.prev).subscribe( (resp: Vehicles) => {

      this.vehicles = resp.results;
      this.next = resp.next;
      this.prev = resp.previous;
    });
  }

  getVehicles() {
    this.swapi.getVehicles().subscribe( (resp: Vehicles) => {

      this.vehicles = resp.results;
      this.next = resp.next;
      this.prev = resp.previous;
    });
  }
}
