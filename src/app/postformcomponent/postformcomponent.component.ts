import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsserviceService } from '../postsservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postformcomponent',
  templateUrl: './postformcomponent.component.html',
  styleUrls: ['./postformcomponent.component.css']
})
export class PostformcomponentComponent implements OnInit {

  private newPost: Post = new Post();

  constructor(private router : Router, private postservice: PostsserviceService) { 
    this.postservice = postservice;
  }

  ngOnInit() {
  }

  addPost(){
    this.postservice.addPost(this.newPost)
  }
  submit (){
    this.postservice.addPost(this.newPost);
    this.router.navigate(['/posts']);
  }
}

 