import { Injectable } from '@angular/core';
import { GenerationModel } from 'src/shared/models/generation.model';
import { PokemonService } from 'src/shared/services/pokemon/pokemon.service';

@Injectable()
export class LoadGenerations {

    private _generations: GenerationModel[];

    get generations(): GenerationModel[] {
        return this._generations;
    }

    constructor(private pokemonService: PokemonService) { }

    load() {
        return new Promise((resolve, reject) => {
            this.pokemonService
                .getAllGenerations()
                .subscribe((response: GenerationModel[]) => {
                    this._generations = response;
                    resolve(true);
                })
        })
    }
}
