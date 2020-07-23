import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/shared/services/pokemon/pokemon.service';
import { MatDialog } from '@angular/material';

import { GameVersion, PokedexRegionModel } from 'src/shared/models/game-version.model';
import { PokemonDialogComponent } from '../pokemon/pokemon-dialog/pokemon-dialog.component';
import { PokedexModel } from 'src/shared/models/pokedex.model';

interface SelectPokedex {
  name?: string;
  pokemons?: PokedexModel[],
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  generation: string;

  searchName: string = '';
  searchEnable: boolean = false;

  gamesVersionByFromGeneration: GameVersion[];
  gameVersion: GameVersion;
  selectedGameVersion: GameVersion;
  selectedGameVersionUrl: string = '';

  selectedRegion: PokedexRegionModel;
  selectedRegionUrl: string;
  selectedPokedex: SelectPokedex;
  selectedPokedexBackup: SelectPokedex;

  constructor(private activatedroute: ActivatedRoute, private pokemonService: PokemonService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.generation = params.get('generation');
    });
    this.getGenerationByName();
  }

  getGenerationByName() {
    this.pokemonService.getGenerationByName(this.generation).subscribe(result => {
      this.gamesVersionByFromGeneration = result.version_groups;
    });
  }

  getRegionsByVersion() {
    this.selectedGameVersion = this.gamesVersionByFromGeneration.find(game => {
      return game.url === this.selectedGameVersionUrl;
    });

    if(this.selectedGameVersion) {
      this.pokemonService.getPokedexRegionByVersion(this.selectedGameVersion.url).subscribe(result => {
        this.gameVersion = result;
        if (result.pokedexes.length > 0) {
          this.selectedRegionUrl = result.pokedexes[0].url;
          this.getRegion();
        } else {
          this.selectedPokedex = { pokemons: null };
          this.selectedPokedexBackup = { pokemons: undefined };
        }
      });
    }
  }

  getRegion() {
    this.selectedRegion = this.gameVersion.pokedexes.find(version => {
      return version.url === this.selectedRegionUrl;
    });

    if(this.selectedRegion) {
      this.pokemonService.getPokedexByRegion(this.selectedRegion.url).subscribe(pokedex => {
        this.selectedPokedex = { name: this.selectedRegion.name, pokemons: pokedex };
        this.selectedPokedexBackup = {...this.selectedPokedex};
      });
    }
  }

  openDialog = (id: string) => {
    this.dialog.open(PokemonDialogComponent, {
      width: '500px',
      data: { id: id }
    });
  }

  handleSearchPokemonOnList() {
    this.searchEnable = true;

    if(this.searchName === '') {
      this.handleBackList();
    }

    this.selectedPokedex.pokemons = this.selectedPokedex.pokemons.filter(pokemon => {
      return pokemon.pokemon_species.name === this.searchName;
    });
  }

  handleBackList() {
    this.searchEnable = false;
    this.selectedPokedex = {...this.selectedPokedexBackup};
    return;
  }
}
