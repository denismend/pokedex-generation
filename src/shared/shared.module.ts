import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    PokemonCardComponent
  ],
  exports: [
    PokemonCardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class SharedModule { }
