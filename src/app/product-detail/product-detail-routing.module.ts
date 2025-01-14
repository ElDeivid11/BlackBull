import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailPage } from './product-detail.page';

const routes: Routes = [
  {
    path: ':id',  // Aquí es donde vas a recibir el id del producto
    component: ProductDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailPageRoutingModule {}
