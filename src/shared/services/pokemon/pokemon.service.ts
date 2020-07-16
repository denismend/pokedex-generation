import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Generation } from 'src/shared/models/generation.model';

interface GenerationResponse {
  count: number;
  results: Generation[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getGenerations(): Observable<Generation[]> {
    return this.httpClient.get<GenerationResponse>(`${environment.pokeApiURL}/generation`)
      .pipe(
        map(res => {
          return res.results;
        })
      )
  }

  getGeneration(generation): Observable<any> {
    return this.httpClient.get<any>(`${environment.pokeApiURL}/generation/${generation}`);
  }

  getPokemonById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.pokeApiURL}/pokemon/${id}`);
  }

  getPokedex(url: string): Observable<any> {
    return this.httpClient.get<any>(url).pipe(
      map(pokedex => {
        return pokedex.pokemon_entries;
      }),
      map(pokemon => {
        return pokemon.map((poke) => {
          const route = '/pokemon-species/'
          const url = poke.pokemon_species.url;
          const cod = url.slice(url.indexOf(route) + route.length, url.lastIndexOf('/'))
          poke.image = this.getImg(cod);
          poke.pokeindex = cod;
          return poke;
        });
      })
    );
  }

  getData(url: string): Observable<any> {
    return this.httpClient.get<any>(url);
  }

  getImg(id: number): string {
    return (`${environment.imgURL}${id}.png`);
  }
}
