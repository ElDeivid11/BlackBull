import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, PopoverController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  // Definir las credenciales para acceder al admin
  private validAdminEmail: string = 'admin@powerbull.com';
  private validAdminPassword: string = '12345admin';

  constructor(private router: Router, private popoverController: PopoverController) {}

  async onSubmit() {
    // Verificar si las credenciales son correctas
    if (this.email && this.isValidEmail(this.email) && this.password) {
      if (this.email === this.validAdminEmail && this.password === this.validAdminPassword) {
        console.log('Credenciales de admin correctas');
        this.router.navigate(['/admin']);  // Redirige al admin
      } else {
        console.log('Credenciales incorrectas, redirigiendo al catálogo');
        this.router.navigate(['/catalog']);  // Redirige al catálogo
      }
    } else {
      const message = this.getErrorMessage();
      this.showPopover(message);  // Muestra el popover con el mensaje de error
    }
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  getErrorMessage(): string {
    if (!this.email) {
      return 'Por favor, introduce tu correo electrónico.';
    }
    if (!this.isValidEmail(this.email)) {
      return 'Por favor, introduce un correo válido.';
    }
    if (!this.password) {
      return 'Por favor, introduce tu contraseña.';
    }
    return '';
  }

  async showPopover(message: string) {
    const popover = await this.popoverController.create({
      component: PopoverContentComponent, // Componente que muestra el mensaje de error
      componentProps: { message },
      translucent: true,
    });
    await popover.present();
  }
}

@Component({
  selector: 'app-popover-content',
  template: `
    <div class="popover-content">
      <p>{{ message }}</p>
      <ion-button fill="clear" size="small" (click)="dismiss()">Cerrar</ion-button>
    </div>
  `,
  styles: [`
    .popover-content {
      text-align: center;
      padding: 15px;
      color: red;
      font-size: 16px;
    }
  `],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PopoverContentComponent {
  message!: string;

  constructor(private popoverController: PopoverController) {}

  dismiss() {
    this.popoverController.dismiss();
  }
}
