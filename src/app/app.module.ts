import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { PostscomponentComponent } from './postscomponent/postscomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PostscomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
