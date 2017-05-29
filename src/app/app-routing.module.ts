import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyVomComponent } from './daily-vom/daily-vom.component';
import { GorkedComponent } from './gorked/gorked.component';
import { MyPageComponent } from './my-page/my-page.component';
import { OldShitComponent } from './old-shit/old-shit.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';



const routes: Routes = [
  { path: '', redirectTo: 'daily-vom', pathMatch: 'full' },
  { path: 'daily-vom',          component: DailyVomComponent },
  { path: 'gorked',          component: GorkedComponent },
  { path: 'my-page',     component: MyPageComponent },
  { path: 'old-shit',          component: OldShitComponent },
  { path: 'daily-vom/new',     component: NewPostComponent },
  { path: 'daily-vom/:id/edit',     component: EditPostComponent },
  { path: 'daily-vom/:id',     component: PostDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
