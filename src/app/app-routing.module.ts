import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login/login.page';  // Importar LoginPage directamente
import { RegisterPage } from './register/register.page';
import { CatalogPage } from './catalog/catalog.page';
import { ForgotPasswordPage } from './forgotpassword/forgotpassword.page';
import { ProfilePage } from './profile/profile.page';

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
    path: 'forgotpassword',
    component: ForgotPasswordPage,
  },

  {
    path: 'catalog',
    component: CatalogPage, // Si es standalone
  },

  {
    path: 'profile',
    component: ProfilePage, // Si es standalone
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },

  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'forgotpassword',
    pathMatch: 'full',
  },
  
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then( m => m.CatalogPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then(m => m.ForgotPasswordPageModule)

  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configurar el enrutamiento
  exports: [RouterModule],
})
export class AppRoutingModule {}
