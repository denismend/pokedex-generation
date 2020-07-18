import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Generation } from 'src/shared/models/generation.model';
import { GameVersion } from 'src/shared/models/game-version.model';
import { Pokedex } from 'src/shared/models/pokedex.model';

interface GenerationsResponse {
  count: number;
  results: Generation[];
}

interface GenerationResponse {
  version_groups: GameVersion[];
}

interface PokemonSpeciesResponse {
  name: string;
  url: string;
}

interface PokedexRegionReponse {
  name: string;
  pokemon_entries: [
    {
      entry_number: number;
      pokemon_species: PokemonSpeciesResponse
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private imgPkmNormalURL: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  private imgPkmShinyURL: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/';

  constructor(private httpClient: HttpClient) { }

  getAllGenerations(): Observable<Generation[]> {
    return this.httpClient.get<GenerationsResponse>(`${environment.baseURL}/generation`)
      .pipe(
        map(res => {
          return res.results;
        })
      )
  }

  getGenerationByName(generation: string): Observable<GenerationResponse> {
    return this.httpClient.get<GenerationResponse>(`${environment.baseURL}/generation/${generation}`);
  }

  getPokedexRegionByVersion(url: string): Observable<GameVersion> {
    return this.httpClient.get<any>(url);
  }

  getPokedexByRegion(url: string): Observable<Pokedex[]> {
    return this.httpClient.get<PokedexRegionReponse>(url).pipe(
      map(pokedex => {
        return pokedex.pokemon_entries;
      }),
      map(pokemon => {
        return pokemon.map((poke) => {
          //poke.name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
          const route = '/pokemon-species/'
          const url = poke.pokemon_species.url;
          const cod = url.slice(url.indexOf(route) + route.length, url.lastIndexOf('/'))

          const newPokedexObj: Pokedex = {
            entry_number: poke.entry_number,
            image: this.getImgPkmNormal(cod),
            shiny: this.getImgPkmShiny(cod),
            pokeindex: cod,
            pokemon_species: {...poke.pokemon_species,
              name: poke.pokemon_species.name.charAt(0).toUpperCase()
                + poke.pokemon_species.name.slice(1)
            }
          };

          return newPokedexObj;
        });
      })
    );
  }

  getPokemonById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.baseURL}/pokemon/${id}`);
  }

  getImgPkmNormal(id: string): string {
    return (`${this.imgPkmNormalURL}${id}.png`);
  }

  getImgPkmShiny(id: string): string {
    return (`${this.imgPkmShinyURL}${id}.png`);
  }
}
