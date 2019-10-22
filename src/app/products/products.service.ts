import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  products = [
    { productName: "Abc", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Abc", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Abc", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Abc", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Abc", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Abc", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Abc", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Abc", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Abc", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Abc", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } },
    { productName: "Abc", inStock: true, sizes: { s: 5, m: 6, l: 3, xl: 4 } }
  ];

  constructor() {}

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  addProduct(newProduct) {
    this.products.push({ ...newProduct, sizes: { s: 5, m: 6, l: 3, xl: 4 } });
  }
}
