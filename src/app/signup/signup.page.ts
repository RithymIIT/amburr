import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;
  isSubmit: boolean;

  constructor(public fb: FormBuilder, public authService: AuthService, private router: Router) { 
    this.isSubmit = false;
    this.createSignupForm();
  }

  ngOnInit() {
  }

    /************CREATE A REGISTRATION FORM************ */


  createSignupForm(){
    this.signupForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8) ,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')]],
      checkbox: [false, [Validators.requiredTrue]]
    });
  }
    /*****GET AUTH CONTROLS FOR REGISTER FORM****** */

     get form() {
      return this.signupForm.controls;
    }

    /************REGISTER FORM ON SUBMIT************ */

    register(value: any): void{
      console.log('register');
      this.isSubmit = true;
      if(this.signupForm.invalid){
        return;
      }
      const data = {
        name: value.name,
        email: value.email,
        password: value.password
        };

      console.log(data);
      this.authService.presentLoading();
      this.authService.registerUser(data).then((res) =>{
        this.authService.stopLoading();
        this.authService.presentToast('Registration successful. Verification email has been sent to your email id. Please verify your email before login', 'success');
        console.log(res);
        this.onReset();
        
      }).catch((e) =>{
        this.authService.stopLoading();
        this.authService.presentToast(e.message, 'danger')
        console.log(e);
        this.onReset();
      })
      


    }

    /***********RESET MY FORM******* */
    onReset() {
      this.isSubmit = false;
      this.signupForm.reset();
    }

  

}
