import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubService } from './github.service';
import { RepositoryComponent } from './repository/repository.component';
import { SvgIconModule } from '../components/svg-icon/svg-icon.module';
import { TopicsComponent } from './topics/topics.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    TopicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SvgIconModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
