import { Component, OnInit } from '@angular/core';
import { PostsserviceService } from '../postsservice.service';
import { Post } from '../post';

@Component({
  selector: 'app-postscomponent',
  templateUrl: './postscomponent.component.html',
  styleUrls: ['./postscomponent.component.css']
})
export class PostscomponentComponent implements OnInit {
  posts: Array<Post>
  constructor(private postsservice: PostsserviceService) {
    this.posts= postsservice.getPosts();
   }

  ngOnInit() {
  }

}
