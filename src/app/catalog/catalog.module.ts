import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CatalogPageRoutingModule } from './catalog-routing.module';
import { CatalogPage } from './catalog.page';
import { RouterModule } from '@angular/router'; // Importar RouterModule

@NgModule({
  imports: [
    CommonModule,
    
    FormsModule,
    IonicModule,
    CatalogPageRoutingModule,
    RouterModule,
  ],

})
export class CatalogPageModule {}
