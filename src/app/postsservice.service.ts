import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable()

export class PostsserviceService {

  private posts: Post[] = [];
 
  private idCount = 3;
  constructor() {  
// sad sam menjao ovaj zapis jer nije hteo da radi sa predhodnim tj nije ispisivao id brojeve
    let firstPost = new Post 
      ( 
        1,
        'Još jedna pobeda Partizana',
        'Još jedna pobeda Partizana u klasiku ovih prostora. Sinoć je Partizan pobedio večitog rivala Cibonu i tako nastavio borbu za 4. mesto u ABA ligi.',
        '01-17-2018'
      );
    let secondPost = new Post
      (
        2,
        'U susret novim izazovima',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        '01-17-2018',
      );
    let thirdPost = new Post  
      (
        3,
        'Where can I get some?',
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        '01-11-2018',
      );

    this.posts.push(firstPost, secondPost, thirdPost);
   
  } 
  public getPosts(){
    return this.posts;
  } 
  public addPost(post: Post){
    post.id = this.idCount;
    this.posts.push(post);
    this.idCount++
  }
   public getById(id: number){
     return this.posts.find((p: Post) => p.id === id);
   }
}
