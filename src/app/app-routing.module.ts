import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login/login.page';  // Importar LoginPage directamente
import { RegisterPage } from './register/register.page';
import { CatalogPage } from './catalog/catalog.page';

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
    path: 'catalog',
    component: CatalogPage, // Si es standalone
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: '',
    redirectTo: 'catalog',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configurar el enrutamiento
  exports: [RouterModule],
})
export class AppRoutingModule {}
