import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  forgotForm: FormGroup;
  isSubmit: boolean;

  constructor(public fb: FormBuilder, public authService: AuthService, private router: Router) { 
    this.isSubmit = false;
    this.createLoginForm();
  }

  ngOnInit() {
  }

    /************CREATE A REGISTRATION FORM************ */


    createLoginForm(){
    this.forgotForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
    });
  }
    /*****GET AUTH CONTROLS FOR REGISTER FORM****** */

     get form() {
      return this.forgotForm.controls;
    }

    /************REGISTER FORM ON SUBMIT************ */

    async submit(value: any){
      console.log('register');
      this.isSubmit = true;
      if(this.forgotForm.invalid){
        return;
      }
      const data = {
        email: value.email,
        };

      console.log(data);
      this.authService.presentLoading();
      this.authService.forgotPassword(data).then((res) =>{
        this.authService.stopLoading();
        console.log(res);
        this.onReset();
        this.authService.presentToast('Please check your email to reset the password.', 'success');
        this.router.navigate(['/login']);
        
      }).catch(e =>{
        this.authService.stopLoading();
        this.authService.presentToast(e.message, 'danger');
        console.log(e);
      }) 


    }

    /***********RESET MY FORM******* */
    onReset() {
      this.isSubmit = false;
      this.forgotForm.reset();
    }

}
