import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule

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

  onSubmit() {
    if (this.email) {
      this.showConfirmation = true;
      this.email = '';
    }
  }
}
