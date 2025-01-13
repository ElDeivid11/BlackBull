import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ProfilePage], // Declarar la página aquí
  exports: [ProfilePage], // Exportar si se necesita en otros módulos
})
export class ProfilePageModule {}
