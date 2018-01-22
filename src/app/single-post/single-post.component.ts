import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Post } from '../post';
import { PostsserviceService } from '../postsservice.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  
  private post: Post;
  constructor(private activatedRoute: ActivatedRoute, private postsservice: PostsserviceService) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params)=>{
    this.post = this.postsservice.getById(params["id"]);
    });
  }

}
