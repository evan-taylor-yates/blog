import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail.component';
import { PostsComponent } from './posts.component';
import { DashboardComponent } from './dashboard.component';

import { PostService } from './post.service';
import { PostSearchComponent } from './post-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    PostsComponent,
    DashboardComponent,
    PostSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


