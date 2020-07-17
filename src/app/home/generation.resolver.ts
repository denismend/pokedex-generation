import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';


import { PokemonService } from 'src/shared/services/pokemon/pokemon.service';
import { Generation } from 'src/shared/models/generation.model';

@Injectable()
export class GenerationResolver implements Resolve<Observable<Generation[]>> {
  constructor(private pokemonService: PokemonService) {}

  resolve() {
    return this.pokemonService
        .getAllGenerations();
  }
}
