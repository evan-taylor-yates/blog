import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class PostSearchService {
  constructor(private http: Http) {
  }
  search(term: string): Observable<Post[]> {
    return this.http
      .get(`app/posts/?name=${term}`)
      .map(response => response.json().data as Post[]);
  }
}
