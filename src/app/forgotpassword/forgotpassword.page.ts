import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],  // Importa CommonModule aquí
})
export class ForgotPasswordPage {
  email: string = '';
  showConfirmation: boolean = false;
 
  constructor(private router: Router) {}

  onSubmit() {
    if (this.email) {
      console.log('Correo enviado:', this.email);
      this.showConfirmation = true;
    } else {
      console.error('Correo no válido');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']); // Navega a la página de login
  }
}


  
