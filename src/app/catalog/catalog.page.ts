import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class CatalogPage {
  products = [
    {
      name: 'Bull Pack',
      price: 350,
      image: 'assets/img/product1.png', // Cambia por las rutas correctas
    },
    {
      name: 'Bull Pack',
      price: 350,
      image: 'assets/img/product2.png',
    },
    {
      name: 'Bull Pack',
      price: 350,
      image: 'assets/img/product3.png',
    },
    {
      name: 'Bull Pack',
      price: 350,
      image: 'assets/img/product4.png',
    },
  ];

  constructor() {}
  openWhatsApp() {
    const phoneNumber = '+51933054275';  // Reemplaza con el número de teléfono que deseas usar
    const message = '¡Hola, me gustaría saber más sobre los productos!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_system');
  }
}
