import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  products = [
    { productName: "Tshirt 1", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Tshirst 2", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Tshirt 3", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Tshirt 4", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Tshirt 5", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Tshirt 6", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Tshirt 7", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Tshirt 8", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Tshirt 9", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Tshirt 10", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
  ];

  constructor() {}

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  addProduct(newProduct) {
    this.products.push({ ...newProduct, sizes: { s: 5, m: 6, l: 3, xl: 4 } });
  }
}
