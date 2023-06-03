import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewsectorComponent } from './newsector/newsector.component';



@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    LoginComponent,
    HomeComponent,
    NewsectorComponent
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
