import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// Root Component
import { AppComponent } from './app.component';

// Page Components (URL parent: "")
import { DailyVomComponent } from './daily-vom/daily-vom.component';
import { GorkedComponent } from './gorked/gorked.component';
import { MyPageComponent } from './my-page/my-page.component';
import { OldShitComponent } from './old-shit/old-shit.component';

// Page Components (URL parent: "daily-vom/")
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

// Sub Components
import { PostsComponent } from './posts/posts.component';
import { PostSearchComponent } from './post-search/post-search.component';

// Services
import { PostService } from './post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    DailyVomComponent,
    GorkedComponent,
    MyPageComponent,
    OldShitComponent,
    NewPostComponent,
    EditPostComponent,
    PostDetailComponent,
    PostsComponent,
    PostSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


