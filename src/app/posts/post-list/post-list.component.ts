import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})



export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: 'First Post', content: "this is the first post's conten" },
  //   { title: 'Second Post', content: "this is the second post's conten" },
  //   { title: 'Third Post', content: "this is the third post's conten" },
  // ];

  posts: Post[] = [];
  private postsSub: Subscription;


  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
