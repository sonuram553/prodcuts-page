import { Component, OnInit, Input } from "@angular/core";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"]
})
export class ProductItemComponent implements OnInit {
  @Input() product;
  @Input() index: number;
  
  constructor(private productService: ProductsService) {}

  ngOnInit() {}

  onDelete() {
    this.productService.deleteProduct(this.index);
  }
}
