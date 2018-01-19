import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsserviceService } from '../postsservice.service';

@Component({
  selector: 'app-postformcomponent',
  templateUrl: './postformcomponent.component.html',
  styleUrls: ['./postformcomponent.component.css']
})
export class PostformcomponentComponent implements OnInit {

  posts: Array<Object>;
  newPost = {};
  constructor(private postservice: PostsserviceService) { 
    this.postservice = postservice;
  }

  ngOnInit() {
  }

  addPost(){
    this.postservice.addPost(this.newPost)
  }
  submit (){
    this._postservice.addPost(post)
    this.router.navigate(['/posts']);
  }
}

/*public addCar(car: Car) {
  this.cars.push(new Car({
    id: this.idCount,
    ...car
}));*/
