import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post';
import { PostService } from '../post/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'daily-vom',
  templateUrl: './daily-vom.component.html',
  styleUrls: ['./daily-vom.css']
})

export class DailyVomComponent implements OnInit {
  posts: Post[] = [];
  constructor(
    private router: Router,
    private postService: PostService) {
  }
  ngOnInit(): void {
    this.postService.getPosts().then(posts => this.posts = posts.slice(0, 10));
  }
  gotoNewPost(): void {
    this.router.navigate(['daily-vom/new']);
  }
  // gotoPostDetail(): void {
  //   this.router.navigate(['/daily-vom', this.selectedPost.name]);
  // }
}
