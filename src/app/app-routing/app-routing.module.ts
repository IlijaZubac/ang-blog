import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { PostscomponentComponent } from '../postscomponent/postscomponent.component';
import { PostformcomponentComponent } from '../postformcomponent/postformcomponent.component';

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
