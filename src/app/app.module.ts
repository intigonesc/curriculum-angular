import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    ContactoComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
