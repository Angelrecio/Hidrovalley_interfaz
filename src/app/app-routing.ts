import { RouterModule } from "@angular/router";
import { AppbarComponent } from "./appbar/appbar.component";
import { LoginComponent } from "./login/login.component";

const appRoutes = [
    {path: 'path_appbar', component: AppbarComponent},
    {path: 'path_login', component: LoginComponent}
];


// no tocar
export const routing = RouterModule.forRoot(appRoutes);