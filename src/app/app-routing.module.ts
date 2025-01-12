import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login/login.page';  // Importar LoginPage directamente
import { RegisterPage } from './register/register.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,  // Usar el componente standalone directamente
  },

  {
    path: 'register',
    component: RegisterPage
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configurar el enrutamiento
  exports: [RouterModule],
})
export class AppRoutingModule {}
