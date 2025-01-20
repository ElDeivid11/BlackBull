import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPage } from './products.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage, // Componente principal de la página
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
