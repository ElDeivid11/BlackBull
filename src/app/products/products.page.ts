import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductsService } from './products.service';
import { Product } from './product.model'; // Si tienes un modelo de producto

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ProductsPage implements OnInit {
  products: Product[] = []; // Listado de productos
  newProduct: Product = { name: '', price: 0 }; // Propiedad para el nuevo producto

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  addProduct() {
    // Validar que el producto tenga datos antes de añadirlo
    if (this.newProduct.name && this.newProduct.price > 0) {
      this.productService.addProduct(this.newProduct).subscribe(product => {
        this.products.push(product);  // Añadir el producto al listado
        this.newProduct = { name: '', price: 0 };  // Limpiar el formulario
      });
    }
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter(p => p.id !== productId);  // Eliminar el producto
    });
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    // Aquí puedes manejar la carga de imágenes, por ejemplo, subiéndola a un servidor
    console.log(file);
  }

  editProduct(product: Product) {
    // Implementa la lógica de edición aquí, puede ser un formulario de edición
    console.log('Editando producto', product);
  }
}
