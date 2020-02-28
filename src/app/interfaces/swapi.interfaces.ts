export interface Characters {
    count: number;
    next: string;
    previous: string;
    results: Character[];
}

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  filmsRequested: Film[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Planets {
    count: number;
    next: string;
    previous: string;
    results: Planet[];
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: any[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Starships {
    count: number;
    next: string;
    previous: string;
    results: Starship[];
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: any[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Species {
    count: number;
    next: string;
    previous: string;
    results: Specie[];
}

export interface Specie {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Films {
    count: number;
    next: string;
    previous: string;
    results: Film[];
}

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Vehicles {
    count: number;
    next: string;
    previous: string;
    results: Vehicle[];
}

export interface Vehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: any[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}