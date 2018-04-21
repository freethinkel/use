import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { PostCardComponent } from './shared/post-card/post-card.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortCardComponent } from './shared/port-card/port-card.component';
import { SocialBtnsComponent } from './shared/social-btns/social-btns.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { RusMonthPipe } from './pipes/rus-month.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    PostCardComponent,
    PortfolioComponent,
    PortCardComponent,
    SocialBtnsComponent,
    SinglePostComponent,
    RusMonthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
