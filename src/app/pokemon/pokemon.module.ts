
import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatChipsModule,
  MatCardModule,
  MatDialogModule,
  MatProgressBarModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';

import { DarkenOnHoverModule } from 'src/shared/directives/dark-on-hover/dark-on-hover.module';
import { PkmShinyOnHoverModule } from 'src/shared/directives/pkm-shiny-on-hover/pkm-shiny-on-hover.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from '../pokemon/pokemon-card/pokemon-card.component';
import { PokemonDialogComponent } from './pokemon-dialog/pokemon-dialog.component';

@NgModule({
  declarations: [
    PokemonDialogComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,
    DarkenOnHoverModule,
    PkmShinyOnHoverModule,

    // Material Modules
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    PokemonDialogComponent,
    PokemonCardComponent
  ],
  entryComponents: [PokemonDialogComponent],
  providers: [],
})
export class PokemonModule { }
