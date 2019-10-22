import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.scss"]
})
export class ProductAddComponent implements OnInit {
  addForm: FormGroup;
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      productName: ["", Validators.required],
      productId: ["", Validators.required],
      price: [""],
      quantity: [""]
    });
  }

  onSubmit() {
    console.log(this.addForm.value);
    if (this.addForm.valid) {
      this.productService.addProduct(this.addForm.value);
      this.dialog.openDialogs[0].close();
    }
  }

  onCancel() {
    this.dialog.openDialogs[0].close();
  }
}
