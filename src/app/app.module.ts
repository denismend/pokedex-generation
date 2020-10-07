import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatChipsModule, MatCardModule, MatDialogModule, MatProgressBarModule, MatSelectModule } from  '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LoadGenerations } from './load-generations';
import { DarkenOnHoverModule } from 'src/shared/directives/dark-on-hover/dark-on-hover.module';
import { PkmShinyOnHoverModule } from 'src/shared/directives/pkm-shiny-on-hover/pkm-shiny-on-hover.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

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
    MatSelectModule
  ],
  providers: [
    LoadGenerations,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
