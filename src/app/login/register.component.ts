import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import * as swal from 'sweetalert';
import swal from 'sweetalert';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';


declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    forma : FormGroup;

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }

  sonIguales( campo: string, campo2: string) {
      return ( group: FormGroup ) => {
          let pass1 = group.controls[campo].value;
          let pass2 = group.controls[campo2].value;
          if (pass1 === pass2) {
              return null;
          }
          return {
              sonIguales:true
          }
      }
  }

  ngOnInit() {
      init_plugins();

      this.forma = new FormGroup({
          name: new FormControl( null, Validators.required ),
          email: new FormControl( null, [Validators.required, Validators.email] ),
          password: new FormControl( null, Validators.required ),
          password2: new FormControl( null, Validators.required ),
          condiciones: new FormControl( false ),
      }, { validators: this.sonIguales( 'password', 'password2' ) });




  }

  registerUser() {
      console.log( 'this.forma.valid' );
      console.log( this.forma.valid );
      console.log( this.forma.value );
      if ( this.forma.invalid ) {
          return
      }
      if ( !this.forma.value.condiciones ) {
          console.log('Debe aceptar las condiciones');
          swal('Importante', 'Debe aceptar las condiciones', 'warning');
          return;
          // swal('Importante', 'Debe aceptar las condiciones', 'warning');
      }
      let usuario = new Usuario(
          this.forma.value.name,
          this.forma.value.email,
          this.forma.value.password,
      );

      this._usuarioService.crearUsuario( usuario )
        .subscribe( resp => this.router.navigate(['/login']));
  }


}
