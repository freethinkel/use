import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';


const routes: Routes = [
	{ path: '', redirectTo: 'main', pathMatch: 'full'},
	{ path: 'main', component: MainComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'posts/:id', component: SinglePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
