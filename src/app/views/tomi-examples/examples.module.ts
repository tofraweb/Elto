// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExamplesComponent } from './examples.component';

// Examples Routing
import { ExamplesRoutingModule } from './examples-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ],
  declarations: [
    ExamplesComponent
  ]
})
export class ExamplesModule { }
