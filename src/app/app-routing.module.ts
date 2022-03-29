import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PendingComponent } from './pending/pending.component';




const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path:'home',component: HomeComponent },
  { path:'dashboard', component: DashboardComponent},
  {path: 'pending', component: PendingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
