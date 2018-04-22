import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
	{ path: '', redirectTo: 'main', pathMatch: 'full'},
	{ path: 'main', component: MainComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'login', component: LoginComponent }
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
