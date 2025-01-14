import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';  // Para usar Location y navegar hacia atrás

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: false
})
export class ProductDetailPage implements OnInit {
  productId: string | null = null;
  product: any = {};  // Para almacenar los detalles del producto

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    // Obtener el id del producto desde la URL
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      console.log('Producto ID:', this.productId);
      // Aquí puedes hacer una llamada a un servicio para obtener los detalles del producto usando 'this.productId'
    });
  }

  loadProductDetails(productId: string) {
    // Aquí deberías cargar los detalles del producto, ya sea desde una API o una lista local.
    // Este es un ejemplo con una lista estática de productos:
    const products = [
      { id: '1', name: 'Bull Pack', description: 'Pack de productos Bull', price: 350, image: 'assets/img/product1.png' },
      { id: '2', name: 'Bull Pro', description: 'Producto avanzado Bull', price: 450, image: 'assets/img/product2.png' }
    ];

    // Buscar el producto en la lista usando el productId
    this.product = products.find(p => p.id === productId) || {};
  }

  goBack() {
    this.location.back();  // Navega hacia la página anterior
  }
}