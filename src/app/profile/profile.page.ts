import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage {
  profileImage: string = 'assets/img/profile-placeholder.jpg'; // Imagen por defecto
  username: string = 'Usuario Ejemplo';
  email: string = 'usuario@ejemplo.com';

  constructor(private router: Router) {}

  // Función para abrir el input de selección de imagen
  selectImage() {
    const fileInput: HTMLInputElement = document.querySelector('#fileInput')!;
    fileInput.click(); // Simula el clic en el input file
  }

  // Función que maneja la imagen seleccionada
  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
        this.profileImage = e.target.result; // Establece la nueva imagen
      };
      
      reader.readAsDataURL(file); // Lee el archivo como una URL de datos (base64)
    }
  }

  // Función para cerrar sesión
  logout() {
    console.log('Cerrar sesión');
    this.router.navigate(['/login']);
  }
}
