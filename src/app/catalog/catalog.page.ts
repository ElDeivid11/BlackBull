import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router para navegación
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Esto suprime el error (usado solo como último recurso)
})
export class CatalogPage {
  products = [
    {
      id: '1', // Este es el ID único
      name: 'Bull Pack',
      description: 'Pack de productos Bull',
      price: 350,
      image: 'assets/img/product1.png',
    },
    {
      id: '2',
      name: 'Bull Pro',
      description: 'Producto avanzado Bull',
      price: 450,
      image: 'assets/img/product2.png',
    },
    // Agrega más productos según sea necesario
  ];

  constructor(private router: Router) {}

  openProductDetails(productId: number) {
    // Navegar a la página de detalles del producto usando su ID
    this.router.navigate(['/product', productId]);
  }

  openWhatsApp() {
    const phoneNumber = '+51933054275';  // Reemplaza con el número de teléfono que deseas usar
    const message = '¡Hola, me gustaría saber más sobre los productos!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_system');
  }
}
