import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { FilmsComponent } from './pages/films/films.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { SpeciesComponent } from './pages/species/species.component';
import { PlanetsComponent } from './pages/planets/planets.component';

import { SwapiService } from './services/swapi.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CharactersComponent,
    FilmsComponent,
    StarshipsComponent,
    VehiclesComponent,
    SpeciesComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
