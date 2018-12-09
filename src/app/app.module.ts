import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { HnApiService } from './services/hn-api.service';

import { CommonModule } from "@angular/common";
import { DomainPipePipe } from './pipes/domain-pipe.pipe';

import { MomentModule } from 'angular2-moment';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipePipe,
    ItemCommentsComponent,
    CommentTreeComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MomentModule
  ],
  providers: [HnApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
