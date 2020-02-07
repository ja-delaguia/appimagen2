import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { BarraNavegacionComponent } from './componentes/barranavegacion/barra-navegacion.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { LeerUsuariosComponent } from './componentes/leer-usuarios/leer-usuarios.component';
import { LoginComponent } from './componentes/login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarraNavegacionComponent,
    CrearUsuarioComponent,
    LeerUsuariosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
