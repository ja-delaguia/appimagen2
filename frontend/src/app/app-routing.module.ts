import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LeerUsuariosComponent } from './componentes/leer-usuarios/leer-usuarios.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { LoginComponent } from './componentes/login/login.component';

// redireciones para llamar a los componentes
const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'leerUsuarios', component: LeerUsuariosComponent
  },
  {
    path: 'crearUsuario', component: CrearUsuarioComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
