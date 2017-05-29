import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post';
import { PostService } from '../post/post.service';
import { Router } from '@angular/router';



@Component({
  selector: 'my-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: Post[];
  selectedPost: Post;

  constructor(
    private router: Router,
    private postService: PostService) {
  }
  getPosts(): void {
    this.postService.getPosts().then(posts => this.posts = posts);
  }
  ngOnInit(): void {
    this.getPosts();
  }
  onSelect(post: Post): void {
    this.selectedPost = post;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPost.id]);
  }
  createNewPost(): void {
    this.router.navigate(['posts/new']);
  }
  add(name: string, attack: number): void {
    name = name.trim();
    if (!name || !attack ) { return; }
    this.postService.create(name, attack)
      .then(post => {
        this.posts.push(post);
        this.selectedPost = null;
      });
  }
  delete(post: Post): void {
    this.postService
      .delete(post.id)
      .then(() => {
        this.posts = this.posts.filter(h => h !== post);
        if (this.selectedPost === post) { this.selectedPost = null; }
      });
  }


}
