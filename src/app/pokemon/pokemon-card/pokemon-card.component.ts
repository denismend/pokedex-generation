import { Component, OnInit, Input } from '@angular/core';
import { PokemonModel } from 'src/shared/models/pokemon.model';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input()
  public pokemon: PokemonModel;

  @Input()
  public openDialog: any;

  constructor() { }

  ngOnInit() {
  }

}
