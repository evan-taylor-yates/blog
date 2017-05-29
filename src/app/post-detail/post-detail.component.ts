import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../post/post.service';
import { Post } from '../post/post';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent implements OnInit {
  @Input() post: Post;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) {
  }
  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.postService.getPost(+params['id'])).subscribe(post => this.post = post);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.postService.update(this.post)
      .then(() => this.goBack());
  }
  gotoEditPost(id: number): void {
    // this.router.navigate(['/daily-vom']);
    this.router.navigate(['daily-vom', id, 'edit']);
  }
}
