import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppbarComponent } from './appbar/appbar.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: "", redirectTo: "/path_login", pathMatch: "full"},
  {path: "path_appbar", component:AppbarComponent},
  {path: "path_login", component:LoginComponent},
  {path: "path_registro", component:RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
