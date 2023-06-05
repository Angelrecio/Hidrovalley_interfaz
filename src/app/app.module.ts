import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewsectorComponent } from './newsector/newsector.component';
import { RegistroComponent } from './registro/registro.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { PlantasComponent } from './plantas/plantas.component';
import { NuevaPlantaComponent } from './nueva-planta/nueva-planta.component';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    LoginComponent,
    HomeComponent,
    NewsectorComponent,
    RegistroComponent,
    AyudaComponent,
    PlantasComponent,
    NuevaPlantaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
