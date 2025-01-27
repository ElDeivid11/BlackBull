import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login/login.page';  // Importar LoginPage directamente
import { RegisterPage } from './register/register.page';
import { CatalogPage } from './catalog/catalog.page';
import { ForgotPasswordPage } from './forgotpassword/forgotpassword.page';
import { ProfilePage } from './profile/profile.page';
import { ProductDetailPage } from './product-detail/product-detail.page';


const routes: Routes = [
  { path: '', redirectTo: 'login' },
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
  
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.page').then((m) => m.AdminPage),
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  
    // Otras rutas
  {
    path: 'product-detail/:id', // Esto permite recibir el id del producto
    component: ProductDetailPage
  },


  
  





  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configurar el enrutamiento
  exports: [RouterModule],
})
export class AppRoutingModule {}
