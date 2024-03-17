
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  
 
  emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  integerRegex = /^[0-9]*$/;
  nameinteger1 = /^[A-Z]*$/;
  nameinteger2 = /^[A-Z]*$/;

  registerForm = new FormGroup({
    fname: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.pattern(this.nameinteger1)]),
    lname: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.pattern(this.nameinteger2)]),
    mobile: new FormControl("", [Validators.required, Validators.minLength(10) ,Validators.maxLength(10), Validators.pattern(this.integerRegex)]),
    email: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailregex)]),
  });

 
  
  getControl(name:any) : AbstractControl | null {
    return this.registerForm.get(name)
  }
  
  registerFn(){
    console.log(this.registerForm.value)
  }



  /* userSigninForm */

  untegerRegex = /^[0-9]*$/;

  usersigninForm = new FormGroup({
    phoneNumber: new FormControl("", [Validators.required, Validators.minLength(10) ,Validators.maxLength(10), Validators.pattern(this.untegerRegex)]),
    generateOtp: new FormControl("", [Validators.required, Validators.maxLength(6) ,Validators.minLength(6)])
  });

  getSigninControl(name:any): AbstractControl | null {
    return this.usersigninForm.get(name)
  }
  loginFn(){
    console.log(this.usersigninForm.value)
  }
 
}
