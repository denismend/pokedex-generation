
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
  MatInputModule} from  '@angular/material';

import { DarkenOnHoverModule } from 'src/shared/directives/dark-on-hover/dark-on-hover.module';
import { PkmShinyOnHoverModule } from 'src/shared/directives/pkm-shiny-on-hover/pkm-shiny-on-hover.module';
import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PokemonModule } from '../pokemon/pokemon.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    GamesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,
    DarkenOnHoverModule,
    PkmShinyOnHoverModule,
    PokemonModule,
    GamesRoutingModule,

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
  providers: [],
})
export class GamesModule { }
