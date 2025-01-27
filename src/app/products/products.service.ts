import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model'; // Define tu modelo Product aquí

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsCollection = collection(this.firestore, 'products');

  constructor(private firestore: Firestore) {}

  getProducts(): Observable<Product[]> {
    return collectionData(this.productsCollection, { idField: 'id' }) as Observable<Product[]>;
  }

  addProduct(product: Product): Promise<void> {
    const docRef = doc(this.productsCollection);
    return setDoc(docRef, product);
  }

  updateProduct(productId: string, product: Partial<Product>): Promise<void> {
    const docRef = doc(this.firestore, 'products', productId);
    return updateDoc(docRef, product);
  }

  deleteProduct(productId: string): Promise<void> {
    const docRef = doc(this.firestore, 'products', productId);
    return deleteDoc(docRef);
  }
}

