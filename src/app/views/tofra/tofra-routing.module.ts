import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TofraComponent } from './tofra.component';
import { PostsComponent } from './posts.component';
import { TwitterFollowersComponent } from './twitter-followers.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tofra'
    },
    children: [
      {
        path: 'small-examples',
        component: TofraComponent,
        data: {
          title: 'Small Examples'
        }
      },
      {
        path: 'twitter-followers',
        component: TwitterFollowersComponent,
        data: {
          title: 'Twitter Followers'
        }
      },
      {
        path: 'posts',
        component: PostsComponent,
        data: {
          title: 'Posts'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TofraRoutingModule {}
