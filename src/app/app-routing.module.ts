import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppbarComponent } from './appbar/appbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewsectorComponent } from './newsector/newsector.component';

const routes: Routes = [
  {path: "path_appbar", component:AppbarComponent},
  {path: "path_login", component:LoginComponent},
  {path: "path_home", component: HomeComponent},
  {path: "path_newsector", component: NewsectorComponent},
  {path: '', redirectTo: '/path_login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
