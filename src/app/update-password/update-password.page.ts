import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {

  updateForm: FormGroup;
  isSubmit: boolean;

  constructor(public modalController: ModalController, public authService: AuthService, private fb: FormBuilder) { 
    this.isSubmit = false;
    this.createPassForm();
   }

  
    ngOnInit() {
    }

        /************CREATE A PASSWORD FORM************ */


    createPassForm(){
      this.updateForm = this.fb.group({
        oldpass: ['', [Validators.required]],
        newpass: ['', [Validators.required, Validators.minLength(8) ,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')]]
      });
    }

        /************SUBMIT A PASSWORD FORM************ */


    submit(value: any){
      this.isSubmit = true;
      console.log('submitted');
      if(this.updateForm.invalid){
        return;
      }
      const data = {
        old: value.oldpass,
        new: value.newpass
      }
      console.log(data);
      this.authService.presentLoading();
      this.authService.matchOldPassword(data).then((res) =>{
        console.log(res);
        const uid = localStorage.getItem('uid');
        if(res.user.uid == uid){
            this.authService.changePassword(data).then((res) =>{
            this.authService.stopLoading();
            this.authService.presentToast('Password Updated Successfully','success');
            this.dismiss();
          }).catch((e) =>{
            this.authService.stopLoading();
            this.authService.presentToast(e.message, 'danger');
            this.dismiss();
          })
        }
        this.onReset();
      }).catch(e =>{
        this.authService.stopLoading();
        this.authService.presentToast(e.message, 'danger');
        this.onReset();
        
      })
    }

        /************FORM CONTROLS FOR ERROR HANDLING************ */

    get form(){
      return this.updateForm.controls;
    }

    onReset(){
      this.isSubmit = false;
      this.updateForm.reset();
    }

        /************DISMISS THE MODAL************ */



    dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
