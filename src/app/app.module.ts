import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LoadGenerations } from './load-generations';

export function loadFirstData(provider: LoadGenerations) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    // Material Modules
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
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
