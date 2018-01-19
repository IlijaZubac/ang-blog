import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { PostscomponentComponent } from './postscomponent/postscomponent.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PostsserviceService } from './postsservice.service';
import { PostformcomponentComponent } from './postformcomponent/postformcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PostscomponentComponent,
    PostformcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ PostsserviceService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
