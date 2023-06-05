import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppbarComponent } from './appbar/appbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewsectorComponent } from './newsector/newsector.component';
import { RegistroComponent } from './registro/registro.component';
import { AyudaComponent } from './ayuda/ayuda.component'
import { PlantasComponent } from './plantas/plantas.component';
import { NuevaPlantaComponent } from './nueva-planta/nueva-planta.component';

const routes: Routes = [
  {path: "", redirectTo: "/path_login", pathMatch: "full"},
  {path: "path_appbar", component:AppbarComponent},
  {path: "path_login", component:LoginComponent},
  {path: "path_home", component: HomeComponent},
  {path: "path_newsector", component: NewsectorComponent},
  {path: "path_nueva-planta", component: NuevaPlantaComponent},
  {path: "path_plantas", component: PlantasComponent},
  {path: "path_registro", component:RegistroComponent},
  {path: "path_ayuda", component:AyudaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
