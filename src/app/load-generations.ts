import { Injectable } from '@angular/core';
import { Generation } from 'src/shared/models/generation.model';
import { PokemonService } from 'src/shared/services/pokemon/pokemon.service';

@Injectable()
export class LoadGenerations {

    private _generations: Generation[];

    get generations(): Generation[] {
        return this._generations;
    }

    constructor(private pokemonService: PokemonService) { }

    load() {
        return new Promise((resolve, reject) => {
            this.pokemonService
                .getGenerations()
                .subscribe((response: Generation[]) => {
                    this._generations = response;
                    resolve(true);
                })
        })
    }
}
