import { Component, OnInit } from '@angular/core';
import { MimodeloService} from 'src/app/services/mimodelo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mimodelo } from 'src/app/modelo/mimodelo';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  public formuser: FormGroup;
  public misusuarios: Mimodelo;
  private patronemail = '^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private formBuilder: FormBuilder, private mimodeloservice: MimodeloService) {
    this.formuser = formBuilder.group({
      /* IMPORTANTE NOMBRES IGUAL Q UE LA BD */
      nombre: ['', /*Para validar*/ [Validators.required, Validators.minLength(6)]],
      imagen: ['', [Validators.required, Validators.pattern(this.patronemail)]]
    });
   }

  ngOnInit() {
    this.mimodeloservice.saveUsuario(this.formuser.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  submit() {
    this.mimodeloservice.saveUsuario(this.formuser.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  get nombre() {
    return this.formuser.get('nombre');
  }
  get imagen() {
    return this.formuser.get('imagen');
  }
}
