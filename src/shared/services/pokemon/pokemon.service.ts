import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Generation } from 'src/shared/models/generation.model';
import { GameVersion } from 'src/shared/models/game-version.model';

interface GenerationsResponse {
  count: number;
  results: Generation[];
}

interface GenerationResponse {
  version_groups: GameVersion[];
}

interface PokedexRegionReponse {

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

  getPokedexByRegion(url: string): Observable<any> {
    return this.httpClient.get<any>(url).pipe(
      map(pokedex => {
        return pokedex.pokemon_entries;
      }),
      map(pokemon => {
        return pokemon.map((poke) => {
          //poke.name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
          const route = '/pokemon-species/'
          const url = poke.pokemon_species.url;
          const cod = url.slice(url.indexOf(route) + route.length, url.lastIndexOf('/'))
          poke.image = this.getImgPkmNormal(cod);
          poke.shiny = this.getImgPkmShiny(cod);
          poke.pokeindex = cod;
          return poke;
        });
      })
    );
  }

  getPokemonById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.baseURL}/pokemon/${id}`);
  }

  getImgPkmNormal(id: number): string {
    return (`${this.imgPkmNormalURL}${id}.png`);
  }

  getImgPkmShiny(id: number): string {
    return (`${this.imgPkmShinyURL}${id}.png`);
  }
}
