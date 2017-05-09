import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriesService } from './repositories/repositories.service';
import { SvgIconModule } from '../components/svg-icon/svg-icon.module';
import { AuthComponent } from './auth/auth.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoryComponent } from './repositories/repository/repository.component';
import { TopicsComponent } from './repositories/topics/topics.component';
import { AuthService } from './auth/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        RepositoriesComponent,
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
    providers: [RepositoriesService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
