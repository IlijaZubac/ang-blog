import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { PostscomponentComponent } from './postscomponent/postscomponent.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PostsserviceService } from './postsservice.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PostscomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ PostsserviceService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
