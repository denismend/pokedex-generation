import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    PokemonCardComponent
  ],
  exports: [
    PokemonCardComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
  ],
  providers: []
})
export class SharedModule { }
