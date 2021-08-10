import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private loading: HTMLIonLoadingElement;
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  async presentToast(message: string, color = 'primary', duration = 5000) {
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'bottom',
      color,
    });
    toast.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      animated: true,
      spinner: 'lines',
    });
    await this.loading.present();
  }

  async stopLoading() {
    if (this.loading !== undefined) {
      await this.loading.dismiss();
    } else {
      const self = this;
      setTimeout(() => {
        self.stopLoading();
      }, 1000);
    }
  }
}
