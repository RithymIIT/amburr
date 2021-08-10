import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  isSubmit: boolean;

  constructor(public fb: FormBuilder, public authService: AuthService, private router: Router) { 
    this.isSubmit = false;
    this.createLoginForm();
  }

  ngOnInit() {
  }

    /************CREATE A REGISTRATION FORM************ */


    createLoginForm(){
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
    /*****GET AUTH CONTROLS FOR REGISTER FORM****** */

     get form() {
      return this.loginForm.controls;
    }

    /************REGISTER FORM ON SUBMIT************ */

    async login(value: any){
      console.log('register');
      this.isSubmit = true;
      if(this.loginForm.invalid){
        return;
      }
      const data = {
        email: value.email,
        password: value.password
        };

      console.log(data);
      this.authService.presentLoading();
      this.authService.signInUser(data).then((res) =>{
        this.authService.stopLoading();
        console.log('User data',res.user, 'user name', res.user.displayName);
        if(res.user.emailVerified == true){
        this.authService.presentToast('Login successful', 'success');
        localStorage.setItem('uid', res.user.uid);
        // localStorage.setItem('userName', res.userdata.displayName );
        this.router.navigate(['/dashboard']);
        }
        else if(res.user.emailVerified == false){
          this.authService.presentToast('Please verify your email first.', 'danger');
          this.onReset();
        }
        
      }).catch(e =>{
        this.authService.stopLoading();
        this.authService.presentToast(e.message, 'danger');
        console.log(e);
      }) 


    }

    /***********RESET MY FORM******* */
    onReset() {
      this.isSubmit = false;
      this.loginForm.reset();
    }

}
