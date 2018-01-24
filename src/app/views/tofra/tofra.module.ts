import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TofraComponent } from './tofra.component';


// Buttons Routing
import { TofraRoutingModule } from './tofra-routing.module';
import { PostsComponent } from './posts.component';
import { TwitterFollowersComponent } from './twitter-followers.component';

// Angular

@NgModule({
  imports: [
    CommonModule,
    TofraRoutingModule,
    FormsModule
  ],
  declarations: [
    TofraComponent,
    PostsComponent,
    TwitterFollowersComponent
  ]
})
export class TofraModule { }
