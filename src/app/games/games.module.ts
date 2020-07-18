
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
  MatSelectModule } from  '@angular/material';

import { DarkenOnHoverModule } from 'src/shared/directives/dark-on-hover/dark-on-hover.module';
import { PkmShinyOnHoverModule } from 'src/shared/directives/pkm-shiny-on-hover/pkm-shiny-on-hover.module';
import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    CommonModule,

    DarkenOnHoverModule,
    PkmShinyOnHoverModule,
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
    MatSelectModule
  ],
  providers: [],
})
export class GamesModule { }
