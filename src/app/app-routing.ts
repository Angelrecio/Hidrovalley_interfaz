import { RouterModule } from "@angular/router";
import { AppbarComponent } from "./appbar/appbar.component";
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";


const appRoutes = [
    {path: 'path_appbar', component: AppbarComponent},
    {path: 'path_login', component: LoginComponent},
    {path: 'path_registro', component: RegistroComponent}
];


// no tocar
export const routing = RouterModule.forRoot(appRoutes);