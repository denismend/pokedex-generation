
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
import { HomeComponent } from './home.component';
import { GenerationCardComponent } from './generation-card/generation-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    GenerationCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,

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
  providers: [],
})
export class HomeModule { }
