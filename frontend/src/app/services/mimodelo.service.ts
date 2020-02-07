import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mimodelo } from '../modelo/mimodelo';

@Injectable({
  providedIn: 'root'
})
// comunica los datos del formulario con la BD
export class MimodeloService {

  constructor(private http: HttpClient) { }
  getUsuarios(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios');
  }
  /* Guarda todo el modelo del usuario completo */
  saveUsuario(usuario: Mimodelo): Observable<any> {
    console.log(usuario);
    return this.http.post('http://localhost:3000/usuarios', usuario);
  }
/* devuelve el susuario que le pasamos por id */
  getUsuario(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios/${id}');
  }
  /* borra el usuario pasado por id */
  deleteUsuario(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/usuarios/${id}');
  }
  /*actualiza el usuario pasado por id*/
  updateUsuario(id: string, usuario: Mimodelo): Observable<any> {
    return this.http.put('http://localhost:3000/usuarios/${id}', usuario);
  }

  getLogin(usuario: Mimodelo): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios/login/', usuario);
  }

}
