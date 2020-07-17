export interface PokedexRegion {
  name: string;
  url: string;
}

export interface GameVersion {
  name: string;
  url: string;
  pokedexes?: PokedexRegion[]
}
