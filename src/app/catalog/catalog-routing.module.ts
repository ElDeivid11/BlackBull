import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailPage } from '../product-detail/product-detail.page'; // Asegúrate de importar el componente de detalle del producto
import { CatalogPage } from './catalog.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogPage,
  },
  {
    path: 'product/:id',  // Esto coincide con la ruta configurada en product-detail-routing.module.ts
    loadChildren: () => import('../product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
  }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogPageRoutingModule {}
