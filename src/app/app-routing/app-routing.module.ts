import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { PostscomponentComponent } from '../postscomponent/postscomponent.component';
import { PostformcomponentComponent } from '../postformcomponent/postformcomponent.component';
import { SinglePostComponent } from '../single-post/single-post.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostscomponentComponent
  },
  {
    path: 'add',
    component: PostformcomponentComponent
  },
  {
    path: 'posts:id',
    component: SinglePostComponent
  }

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
