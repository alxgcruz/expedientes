import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: ToastController) { }

  async presentToast(texto: string, color: string, duration = 2000, position?: any) {
    const toast = await this.toast.create({
      message: texto,
      color,
      duration,
      position: position || 'bottom'
    });
    toast.present();
  }

  async presentToastSuccess(texto: string, duration = 2000) {
    const toast = await this.toast.create({
      message: texto,
      cssClass: 'toast-mess',
      duration
    });
    toast.present();
  }
  
}
