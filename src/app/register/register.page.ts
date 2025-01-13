import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule], // Importar módulos necesarios
})
export class RegisterPage {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private popoverController: PopoverController) {}

  async onSubmit() {
    const validationMessage = this.validateForm();
    if (validationMessage) {
      // Mostrar mensaje de error en un pop-up
      await this.showPopover(validationMessage);
      return;
    }

    console.log('Registro exitoso:');
    console.log('Usuario:', this.username);
    console.log('Email:', this.email);
    console.log('Contraseña:', this.password);

    // Redirigir a la página de inicio de sesión después del registro
    this.router.navigate(['/login']);
  }

  validateForm(): string | null {
    if (!this.username) {
      return 'El nombre de usuario es obligatorio.';
    }
    if (!this.email) {
      return 'El correo electrónico es obligatorio.';
    }
    if (!this.isValidEmail(this.email)) {
      return 'El correo electrónico no tiene un formato válido.';
    }
    if (!this.password) {
      return 'La contraseña es obligatoria.';
    }
    if (!this.isValidPassword(this.password)) {
      return 'La contraseña debe tener al menos 6 caracteres y contener una letra mayúscula.';
    }
    if (this.password !== this.confirmPassword) {
      return 'Las contraseñas no coinciden.';
    }
    return null; // No hay errores
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  isValidPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(password);
  }

  async showPopover(message: string) {
    const popover = await this.popoverController.create({
      component: PopoverContentComponent,
      componentProps: { message },
      translucent: true,
      cssClass: 'custom-popover',
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
      padding: 20px;
      color: red;
      font-size: 16px;
    }
    ion-button {
      margin-top: 10px;
    }
  `],
  standalone: true,
  imports: [IonicModule],
})
export class PopoverContentComponent {
  message!: string;

  constructor(private popoverController: PopoverController) {}

  dismiss() {
    this.popoverController.dismiss();
  }
}
