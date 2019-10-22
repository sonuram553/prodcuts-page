import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { ProductAddComponent } from "../product-add/product-add.component";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"]
})
export class ProductsListComponent implements OnInit {
  products;
  constructor(
    private productService: ProductsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.products = this.productService.products;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductAddComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
