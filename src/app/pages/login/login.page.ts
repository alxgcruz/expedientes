import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from '../../services/toast.service';
import { merge } from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  loginForm: FormGroup;
  showPassword: boolean;

  constructor(
    private menu: MenuController,
    private router: Router,
    private formBuilder: FormBuilder,
    private readonly auth: AuthService,
    private loadingCtrl: LoadingController,
    private toastSrv: ToastService
    ) {
      this.createForm();
    }

  ngOnInit() {
    this.menu.enable(false, 'custom');
  }

  /**
   * Inicializa el formGroup
   */
  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      scope: ['store'],
      sessionDuplicate: [false]
    });
  }

  async login() {
    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach(control => control.markAsTouched());
      return;
    }
    const usuario: any = this.convertRegistro();

    // Present loading
    const loading = await this.loadingCtrl.create({
      message: 'Espere por favor...',
      mode: 'ios'
    });
    await loading.present();

    this.auth.login(usuario)
      .subscribe((resp: any) => {
        this.router.navigate([`${resp.path}`]);
        loading.dismiss();
      }, (error) => {
        loading.dismiss();
        console.log(error);
        this.toastSrv.presentToast(
          error.error.message,
          'danger',
          3000
        );
      });
  }

  convertRegistro(): any {
    return merge({}, this.loginForm.value);
  }

  /**
   * Muestra/oculta el password
   */
  showPass(): void {
    this.showPassword = !this.showPassword;
  }

  /**
   * Validar campos
   */
  get emailInvalid(): boolean {
    return !this.loginForm.get('email').hasError('required') &&
      this.loginForm.get('email').hasError('email');
  }
  get emailRequired(): boolean {
    return this.loginForm.get('email').touched && this.loginForm.get('email').hasError('required');
  }
  get passwordRequired(): boolean {
    return this.loginForm.get('password').touched && this.loginForm.get('password').hasError('required');
  }


}
