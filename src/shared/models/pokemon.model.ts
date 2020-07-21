export interface PokemonModel {
  id: string;
  name: string;
  types: {
    type: {
      name: string;
    }
  };
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  abilities: {
    ability: {
      name: string;
    }
  }
}