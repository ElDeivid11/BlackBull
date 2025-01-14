import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: false
})
export class ProductsPage {
  searchQuery: string = '';
  products = [
    { name: 'Carnivor Beef Protein 4 lb', description: 'Descripción del producto 1', image: 'assets/img/1280.png', price: '350' },
    { name: 'Producto 2', description: 'Descripción del producto 2', image: 'assets/img/product2.jpg' },
    { name: 'Producto 3', description: 'Descripción del producto 3', image: 'assets/img/product3.jpg' },
    { name: 'Producto 4', description: 'Descripción del producto 4', image: 'assets/img/product4.jpg' },
  ];

  get filteredProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
