import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o'; /*importacao do carousel */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';

import { FormsModule } from '@angular/forms';/*formulario*/
import {MatButtonModule} from '@angular/material/button';/*botao formulario*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule, /*carousel*/
    FormsModule, /*formulario */
    MatButtonModule /*botao formulario*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
