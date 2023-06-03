import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { NewsectorComponent } from './newsector/newsector.component';


=======
import { RegistroComponent } from './registro/registro.component';
>>>>>>> b245ac6384cbb9239365d106545b436ca32598e8

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    LoginComponent,
<<<<<<< HEAD
    HomeComponent,
    NewsectorComponent
=======
    RegistroComponent
>>>>>>> b245ac6384cbb9239365d106545b436ca32598e8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
