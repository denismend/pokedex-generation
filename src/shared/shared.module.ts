import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { MatCardModule } from '@angular/material';
import { DarkenOnHoverModule } from './directives/dark-on-hover/dark-on-hover.module';

@NgModule({
  declarations: [
    PokemonCardComponent
  ],
  exports: [
    PokemonCardComponent,
  ],
  imports: [
    CommonModule,

    DarkenOnHoverModule,

    MatCardModule,
  ],
  providers: []
})
export class SharedModule { }
