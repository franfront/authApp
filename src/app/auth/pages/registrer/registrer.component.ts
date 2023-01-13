import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styles: [
  ]
})
export class RegistrerComponent {

  miForm = this.fb.group({
      nombre: ['Test 4', [Validators.required, Validators.minLength(3)]],
      email: ['test4@test.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]]

  })

  constructor(private fb: FormBuilder, private router: Router, private authS: AuthService) { }

  register(){
    const {email, password, nombre} = this.miForm.value;
     this.authS.registro(nombre!, email!, password!).subscribe(valid => {
        console.log(valid);
       if(valid === true){
        this.router.navigateByUrl('/dashboard');
      }else{
        Swal.fire("Error", valid, "error")
      }
    })


    // this.router.navigateByUrl('/dashboard');
 }

}
