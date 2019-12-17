import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    usuario:Usuario;
    token:string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
      this.cargarStorage()
  }

  guardarStorage( id:string, token:string, usuario:Usuario ) {
      localStorage.setItem('id', id);
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify(usuario) );
      this.usuario = usuario;
      this.token = token;
  }

  login( usuario:Usuario, recordar:Boolean = false ) {
      if ( recordar ) {
          localStorage.setItem('email', usuario.email);
      } else {
          localStorage.removeItem('email')
      }
      let url = URL_SERVICIOS + '/login';
      return this.http.post(url, usuario).pipe(map((resp:any) => {
            swal("Login Correcto", usuario.email, "success");
            this.guardarStorage(resp.id, resp.token, resp.usuario);
            return true;
        }));
  }


  loginGoogle( token:string ) {
      let  url = URL_SERVICIOS + '/login/google';
      return this.http.post(url, {token:token}).pipe(map((resp:any) => {
            swal("Login Correcto", "Desde google", "success");
            this.guardarStorage(resp.id, resp.token, resp.usuario);
            return true;
        }));
  }

  logout() {
      this.token = '';
      this.usuario = null;
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      this.router.navigate(['/login'])
  }

  crearUsuario( usuario:Usuario ) {

      let url = URL_SERVICIOS + '/usuario'
      return this.http.post(url, usuario).pipe(map((resp:any) => {
            swal("Usuario creado", usuario.email, "success");
            return resp.usuario;
        }));

  }

  estaLogueado() {
      return ( this.token && this.token.length > 5) ? true : false;
  }

  cargarStorage() {
      if ( localStorage.getItem('token') ) {
          this.token = localStorage.getItem('token');
          this.usuario = JSON.parse( localStorage.getItem('usuario') );
      }else {
          this.token = '';
          this.usuario = null;
      }

  }

}
