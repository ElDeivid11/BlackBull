import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  products: Product[] = [];
  newProduct: Product = { name: '', price: 0, image: '' };

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  addProduct() {
    this.productsService.addProduct(this.newProduct).then(() => {
      this.newProduct = { name: '', price: 0, image: '' };
    });
  }

  deleteProduct(productId: string) {
    this.productsService.deleteProduct(productId).then(() => {
      this.products = this.products.filter(p => p.id !== productId);
    });
  }

  editProduct(productId: string) {
    const updatedProduct: Partial<Product> = { name: 'Nuevo Nombre' }; // Ejemplo de actualización
    this.productsService.updateProduct(productId, updatedProduct);
  }
}
