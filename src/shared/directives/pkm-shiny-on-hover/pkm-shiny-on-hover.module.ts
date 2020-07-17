import { NgModule } from '@angular/core';
import { PkmShinyOnHoverDirective } from './pkm-shiny-on-hover.directive';

@NgModule({
  declarations: [PkmShinyOnHoverDirective],
  exports: [PkmShinyOnHoverDirective]
})
export class PkmShinyOnHoverModule { }
