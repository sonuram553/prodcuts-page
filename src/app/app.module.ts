import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Materials
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { ProductsComponent } from "./products/products.component";
import { ProductsListComponent } from "./products/products-list/products-list.component";
import { ProductItemComponent } from "./products/product-item/product-item.component";
import { ProductAddComponent } from "./products/product-add/product-add.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductItemComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    //Materials
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  entryComponents: [ProductAddComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
