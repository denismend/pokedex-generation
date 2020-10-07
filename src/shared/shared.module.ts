import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { DarkenOnHoverModule } from './directives/dark-on-hover/dark-on-hover.module';

@NgModule({
  imports: [
    CommonModule,
    DarkenOnHoverModule,
    MatCardModule,
  ],
  providers: []
})
export class SharedModule { }
