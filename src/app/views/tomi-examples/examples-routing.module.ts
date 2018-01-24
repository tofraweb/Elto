import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamplesComponent } from './examples.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Examples'
    },
    children: [
      {
        path: 'tomika',
        component: ExamplesComponent,
        data: {
          title: 'tomacsek'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
