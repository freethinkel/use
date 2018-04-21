import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';


const routes: Routes = [
	{ path: '', redirectTo: 'main', pathMatch: 'full'},
	{ path: 'main', component: MainComponent },
	{ path: 'portfolio', component: PortfolioComponent }
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
