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

  constructor(private router: Router, private popoverController: PopoverController) {}

  async onSubmit() {
    if (this.email && this.isValidEmail(this.email) && this.password) {
      console.log('Formulario válido. Procesando inicio de sesión...');
      // Redirigir al usuario después de un inicio de sesión exitoso
      this.router.navigate(['/catalog']);
    } else {
      const message = this.getErrorMessage();
      this.showPopover(message);
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
      component: PopoverContentComponent, // Un componente para el contenido
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Se usa si Ionic se configura como Web Components
})
export class PopoverContentComponent {
  message!: string;

  constructor(private popoverController: PopoverController) {}

  dismiss() {
    this.popoverController.dismiss();
  }
}
