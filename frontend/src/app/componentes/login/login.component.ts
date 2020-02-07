import { Component, OnInit } from '@angular/core';
import { MimodeloService} from 'src/app/services/mimodelo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mimodelo } from 'src/app/modelo/mimodelo';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formlogin: FormGroup;
  public misusuarios: Mimodelo;
  private patronemail = '^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private formBuilder: FormBuilder, private mimodeloservice: MimodeloService) {
    this.formlogin = formBuilder.group({
      /* IMPORTANTE NOMBRES IGUAL Q UE LA BD */
      nombre: [''],
      imagen: ['']
    });
   }

  ngOnInit() {
    this.mimodeloservice.getLogin(this.formlogin.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  submit() {
    // console.log(this.formlogin.value);
    this.mimodeloservice.getLogin(this.formlogin.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  get nombre() {
    return this.formlogin.get('nombre');
  }
  get imagen() {
    return this.formlogin.get('imagen');
  }
}
