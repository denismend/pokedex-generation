import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatChipsModule, MatCardModule, MatDialogModule, MatProgressBarModule, MatSelectModule } from  '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LoadGenerations } from './load-generations';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { DarkenOnHoverModule } from 'src/shared/directives/dark-on-hover/dark-on-hover.module';
import { PkmShinyOnHoverModule } from 'src/shared/directives/pkm-shiny-on-hover/pkm-shiny-on-hover.module';

export function loadFirstData(provider: LoadGenerations) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
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
    {
      provide: APP_INITIALIZER,
      useFactory: loadFirstData,
      deps: [LoadGenerations],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
