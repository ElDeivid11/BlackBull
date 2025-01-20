export interface Product {
    id?: number;  // El id puede ser opcional dependiendo de tu lógica
    name: string;
    price: number;
    image?: string;  // Puedes almacenar la URL de la imagen o el archivo de la imagen
  }
  // product.model.ts
