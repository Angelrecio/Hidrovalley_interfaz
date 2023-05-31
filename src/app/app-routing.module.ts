import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppbarComponent } from './appbar/appbar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "path_appbar", component:AppbarComponent},
  {path: "path_login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
