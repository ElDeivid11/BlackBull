import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    if (this.username && this.email && this.password) {
      console.log('Usuario:', this.username);
      console.log('Email:', this.email);
      console.log('Contraseña:', this.password);
      
      // Redirigir a la página de inicio de sesión después del registro
      this.router.navigate(['/login']);
    } else {
      console.error('Faltan campos');
    }
  }
}
