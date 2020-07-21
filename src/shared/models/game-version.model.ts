export interface PokedexRegionModel {
  name: string;
  url: string;
}

export interface GameVersion {
  name: string;
  url: string;
  pokedexes?: PokedexRegionModel[]
}
