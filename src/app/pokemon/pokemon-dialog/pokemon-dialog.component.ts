import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonService } from 'src/shared/services/pokemon/pokemon.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './pokemon-dialog.component.html',
  styleUrls: ['./pokemon-dialog.component.scss']
})
export class PokemonDialogComponent implements OnInit {

  pokemonId: any;
  pokemon: any;

  constructor(
    public dialogRef: MatDialogRef<PokemonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonId = JSON.parse(JSON.stringify(this.data.pokemonId));
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService.getPokemonById(this.pokemonId).subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }
}
