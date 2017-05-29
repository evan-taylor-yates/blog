import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Post } from './post';


@Injectable()
export class PostService {
  private postsUrl = 'api/posts';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {
  }
  getPosts(): Promise<Post[]> {
    return this.http.get(this.postsUrl).toPromise().then(response => response.json().data as Post[]).catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // Below is the old getPost method. Uses getPosts to gather all the posts in the database. Then, it searches the list for the Post with
  // the correct ID. However, there is no need to get the entire list of posts from the database when we only want one.
  //
  // getPost(id: number): Promise<Post> {
  //   return this.getPost().then(posts => posts.find(post => post.id === id));
  // }
  // Now, we use an updated version of getPost that grabs only the specified post from the database:

  getPost(id: number): Promise<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http
      .get(url).toPromise()
      .then(response => response.json().data as Post)
      .catch(this.handleError);
  }
  update(post: Post): Promise<Post> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http
      .put(url, JSON.stringify(post), {headers: this.headers})
      .toPromise()
      .then(() => post)
      .catch(this.handleError);
  }
  create(name: string, attack: number): Promise<Post> {
    return this.http
      .post(this.postsUrl, JSON.stringify({name: name, attack: attack}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Post)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}

