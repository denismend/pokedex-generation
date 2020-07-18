export interface Pokedex {
  entry_number: number;
  image: string;
  pokeindex: string;
  pokemon_species: {
    name: string;
    url: string;
  }
  shiny: string;
}
