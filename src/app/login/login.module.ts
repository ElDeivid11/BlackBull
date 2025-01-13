import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { Router } from '@angular/router'; // Importa Router

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Aquí se importa FormsModule
    IonicModule
  ],

})
export class LoginPageModule {}
