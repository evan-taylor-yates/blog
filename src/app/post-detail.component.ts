import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from './post.service';
import { Post } from './post';
import 'rxjs/add/operator/switchMap';
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
    private location: Location
  ) {}
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

}
