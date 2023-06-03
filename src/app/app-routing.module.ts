import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppbarComponent } from './appbar/appbar.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { NewsectorComponent } from './newsector/newsector.component';
=======
import { RegistroComponent } from './registro/registro.component';
>>>>>>> b245ac6384cbb9239365d106545b436ca32598e8

const routes: Routes = [
  {path: "", redirectTo: "/path_login", pathMatch: "full"},
  {path: "path_appbar", component:AppbarComponent},
  {path: "path_login", component:LoginComponent},
<<<<<<< HEAD
  {path: "path_home", component: HomeComponent},
  {path: "path_newsector", component: NewsectorComponent},
  {path: '', redirectTo: '/path_login', pathMatch: 'full'}
=======
  {path: "path_registro", component:RegistroComponent},
>>>>>>> b245ac6384cbb9239365d106545b436ca32598e8
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
