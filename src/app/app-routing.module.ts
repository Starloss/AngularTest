import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsComponent } from './pages/films/films.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { SpeciesComponent } from './pages/species/species.component';
import { PlanetsComponent } from './pages/planets/planets.component';


const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'films' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
