import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,  // Definir como componente standalone
  imports: [IonicModule, FormsModule],  // Importar módulos necesarios
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      console.log('Email:', this.email);
      console.log('Contraseña:', this.password);
      
      this.router.navigate(['/home']);
    } else {
      console.error('Faltan campos');
    }
  }
}
