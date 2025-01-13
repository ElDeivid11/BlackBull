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

  // Función para editar la imagen de perfil
  editProfileImage() {
    // Aquí puedes agregar la lógica para cambiar la foto de perfil
    // Por ejemplo, abrir la galería o cámara para seleccionar una imagen
    console.log('Editar imagen de perfil');
  }

  // Función para cerrar sesión
  logout() {
    // Aquí puedes agregar la lógica para cerrar sesión
    console.log('Cerrar sesión');
    this.router.navigate(['/login']);
  }
}
